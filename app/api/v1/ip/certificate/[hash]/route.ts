import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '@/lib/mongodb'
import { generateCertificate } from '@/lib/ip-proof/certificate'
import type { IPProof, CertificateData } from '@/lib/ip-proof/types'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ hash: string }> }
) {
  try {
    const { hash } = await params

    // Validate hash format
    if (!/^[a-fA-F0-9]{64}$/.test(hash)) {
      return NextResponse.json(
        { success: false, message: 'Invalid hash format' },
        { status: 400 }
      )
    }

    const db = await getDatabase()
    const collection = db.collection<IPProof>('ip_proofs')

    const proof = await collection.findOne({ fileHash: hash.toLowerCase() })

    if (!proof) {
      return NextResponse.json(
        { success: false, message: 'No proof found for this file hash' },
        { status: 404 }
      )
    }

    const certificateData: CertificateData = {
      proofId: proof._id?.toString() || '',
      fileHash: proof.fileHash,
      fileName: proof.fileName,
      fileSize: proof.fileSize,
      createdAt: proof.createdAt,
      confirmationDate: proof.confirmationDate,
      bitcoinTxId: proof.bitcoinTxId,
      bitcoinBlockHeight: proof.bitcoinBlockHeight,
      status: proof.status,
    }

    const pdfBuffer = await generateCertificate(certificateData)

    const fileName = `ip-proof-${proof.fileHash.substring(0, 8)}.pdf`

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Length': pdfBuffer.length.toString(),
      },
    })
  } catch (error) {
    console.error('Certificate generation error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to generate certificate' },
      { status: 500 }
    )
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
