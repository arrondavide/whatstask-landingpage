import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '@/lib/mongodb'
import type { IPProof, VerifyResponse } from '@/lib/ip-proof/types'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ hash: string }> }
) {
  try {
    const { hash } = await params

    // Validate hash format
    if (!/^[a-fA-F0-9]{64}$/.test(hash)) {
      return NextResponse.json(
        { success: false, exists: false, message: 'Invalid hash format' },
        { status: 400 }
      )
    }

    const db = await getDatabase()
    const collection = db.collection<IPProof>('ip_proofs')

    const proof = await collection.findOne({ fileHash: hash.toLowerCase() })

    if (!proof) {
      const response: VerifyResponse = {
        success: true,
        exists: false,
        message: 'No proof found for this file hash',
      }
      return NextResponse.json(response)
    }

    const response: VerifyResponse = {
      success: true,
      exists: true,
      proof: {
        fileHash: proof.fileHash,
        fileName: proof.fileName,
        status: proof.status,
        createdAt: proof.createdAt.toISOString(),
        confirmationDate: proof.confirmationDate?.toISOString(),
        bitcoinTxId: proof.bitcoinTxId,
        bitcoinBlockHeight: proof.bitcoinBlockHeight,
      },
      message: getStatusMessage(proof.status),
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Verify error:', error)
    return NextResponse.json(
      { success: false, exists: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

function getStatusMessage(status: string): string {
  switch (status) {
    case 'pending':
      return 'Proof registered, awaiting blockchain submission'
    case 'anchoring':
      return 'Proof submitted to Bitcoin blockchain, awaiting confirmation'
    case 'confirmed':
      return 'Proof confirmed on Bitcoin blockchain'
    default:
      return 'Unknown status'
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
