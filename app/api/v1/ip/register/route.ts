import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '@/lib/mongodb'
import { createTimestamp } from '@/lib/ip-proof/opentimestamps'
import type { IPProof, RegisterRequest, RegisterResponse } from '@/lib/ip-proof/types'

export async function POST(request: NextRequest) {
  try {
    const body: RegisterRequest = await request.json()

    // Validate required fields
    if (!body.fileHash || !body.fileName || !body.fileSize || !body.mimeType || !body.userId) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate hash format (SHA-256 = 64 hex characters)
    if (!/^[a-fA-F0-9]{64}$/.test(body.fileHash)) {
      return NextResponse.json(
        { success: false, message: 'Invalid hash format. Expected SHA-256 (64 hex characters)' },
        { status: 400 }
      )
    }

    const db = await getDatabase()
    const collection = db.collection<IPProof>('ip_proofs')

    // Check if hash already exists
    const existingProof = await collection.findOne({ fileHash: body.fileHash.toLowerCase() })
    if (existingProof) {
      return NextResponse.json(
        {
          success: false,
          message: 'This file hash is already registered',
          existingProofId: existingProof._id?.toString(),
          createdAt: existingProof.createdAt.toISOString(),
        },
        { status: 409 }
      )
    }

    // Create OpenTimestamps proof
    const otsData = await createTimestamp(body.fileHash.toLowerCase())

    const now = new Date()
    const proof: IPProof = {
      fileHash: body.fileHash.toLowerCase(),
      fileName: body.fileName,
      fileSize: body.fileSize,
      mimeType: body.mimeType,
      userId: body.userId,
      telegramId: body.telegramId,
      otsData: otsData || undefined,
      status: otsData ? 'anchoring' : 'pending',
      createdAt: now,
      updatedAt: now,
      metadata: body.metadata,
    }

    const result = await collection.insertOne(proof as any)

    const response: RegisterResponse = {
      success: true,
      proofId: result.insertedId.toString(),
      fileHash: proof.fileHash,
      status: proof.status,
      createdAt: proof.createdAt.toISOString(),
      message: otsData
        ? 'Proof registered and submitted to Bitcoin blockchain. Confirmation typically takes 1-2 hours.'
        : 'Proof registered. Blockchain anchoring will be attempted shortly.',
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error('Register error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
