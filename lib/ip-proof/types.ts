export interface IPProof {
  _id?: string
  fileHash: string
  fileName: string
  fileSize: number
  mimeType: string
  userId: string
  telegramId?: number
  otsData?: string
  status: 'pending' | 'anchoring' | 'confirmed'
  bitcoinTxId?: string
  bitcoinBlockHeight?: number
  confirmationDate?: Date
  createdAt: Date
  updatedAt: Date
  metadata?: {
    title?: string
    description?: string
    tags?: string[]
  }
}

export interface RegisterRequest {
  fileHash: string
  fileName: string
  fileSize: number
  mimeType: string
  userId: string
  telegramId?: number
  metadata?: {
    title?: string
    description?: string
    tags?: string[]
  }
}

export interface RegisterResponse {
  success: boolean
  proofId: string
  fileHash: string
  status: string
  createdAt: string
  message: string
}

export interface VerifyResponse {
  success: boolean
  exists: boolean
  proof?: {
    fileHash: string
    fileName: string
    status: string
    createdAt: string
    confirmationDate?: string
    bitcoinTxId?: string
    bitcoinBlockHeight?: number
  }
  message: string
}

export interface CertificateData {
  proofId: string
  fileHash: string
  fileName: string
  fileSize: number
  createdAt: Date
  confirmationDate?: Date
  bitcoinTxId?: string
  bitcoinBlockHeight?: number
  status: string
}
