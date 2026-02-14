import PDFDocument from 'pdfkit'
import QRCode from 'qrcode'
import type { CertificateData } from './types'

export async function generateCertificate(data: CertificateData): Promise<Buffer> {
  return new Promise(async (resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: 'A4',
        margin: 50,
        info: {
          Title: 'IP Proof Certificate',
          Author: 'WhatsTask',
          Subject: `Proof of Creation - ${data.fileName}`,
        },
      })

      const chunks: Buffer[] = []
      doc.on('data', (chunk) => chunks.push(chunk))
      doc.on('end', () => resolve(Buffer.concat(chunks)))
      doc.on('error', reject)

      // Generate QR code for verification URL
      const verifyUrl = `https://www.whatstask.com/verify?hash=${data.fileHash}`
      const qrCodeDataUrl = await QRCode.toDataURL(verifyUrl, {
        width: 150,
        margin: 1,
        color: { dark: '#000000', light: '#ffffff' },
      })

      // Header
      doc.fillColor('#7c3aed')
      doc.fontSize(28).font('Helvetica-Bold').text('IP PROOF CERTIFICATE', { align: 'center' })
      doc.moveDown(0.5)
      doc.fillColor('#666666')
      doc.fontSize(12).font('Helvetica').text('Blockchain-Verified Proof of Creation', { align: 'center' })
      doc.moveDown(2)

      // Horizontal line
      doc.strokeColor('#e5e7eb')
      doc.lineWidth(1)
      doc.moveTo(50, doc.y).lineTo(545, doc.y).stroke()
      doc.moveDown(1.5)

      // Certificate details
      doc.fillColor('#111111')
      doc.fontSize(11).font('Helvetica-Bold').text('CERTIFICATE DETAILS')
      doc.moveDown(0.5)

      const detailsStartY = doc.y
      const leftCol = 50
      const rightCol = 200

      // File Name
      doc.fontSize(10).font('Helvetica').fillColor('#666666').text('File Name:', leftCol, doc.y)
      doc.fillColor('#111111').text(truncateText(data.fileName, 50), rightCol, doc.y - doc.currentLineHeight())
      doc.moveDown(0.8)

      // File Size
      doc.fillColor('#666666').text('File Size:', leftCol, doc.y)
      doc.fillColor('#111111').text(formatFileSize(data.fileSize), rightCol, doc.y - doc.currentLineHeight())
      doc.moveDown(0.8)

      // Registration Date
      doc.fillColor('#666666').text('Registration Date:', leftCol, doc.y)
      doc.fillColor('#111111').text(formatDate(data.createdAt), rightCol, doc.y - doc.currentLineHeight())
      doc.moveDown(0.8)

      // Status
      doc.fillColor('#666666').text('Status:', leftCol, doc.y)
      const statusColor = data.status === 'confirmed' ? '#059669' : data.status === 'anchoring' ? '#d97706' : '#6b7280'
      doc.fillColor(statusColor).font('Helvetica-Bold').text(data.status.toUpperCase(), rightCol, doc.y - doc.currentLineHeight())
      doc.font('Helvetica')
      doc.moveDown(0.8)

      // Bitcoin Block (if confirmed)
      if (data.bitcoinBlockHeight) {
        doc.fillColor('#666666').text('Bitcoin Block:', leftCol, doc.y)
        doc.fillColor('#111111').text(`#${data.bitcoinBlockHeight.toLocaleString()}`, rightCol, doc.y - doc.currentLineHeight())
        doc.moveDown(0.8)
      }

      // Bitcoin TX (if confirmed)
      if (data.bitcoinTxId) {
        doc.fillColor('#666666').text('Bitcoin TX:', leftCol, doc.y)
        doc.fillColor('#111111').fontSize(8).text(data.bitcoinTxId, rightCol, doc.y - doc.currentLineHeight(), { width: 300 })
        doc.fontSize(10)
        doc.moveDown(0.8)
      }

      // Confirmation Date (if confirmed)
      if (data.confirmationDate) {
        doc.fillColor('#666666').text('Confirmed:', leftCol, doc.y)
        doc.fillColor('#111111').text(formatDate(data.confirmationDate), rightCol, doc.y - doc.currentLineHeight())
        doc.moveDown(0.8)
      }

      doc.moveDown(1.5)

      // File Hash Section
      doc.strokeColor('#e5e7eb')
      doc.moveTo(50, doc.y).lineTo(545, doc.y).stroke()
      doc.moveDown(1)

      doc.fillColor('#111111')
      doc.fontSize(11).font('Helvetica-Bold').text('SHA-256 FILE HASH')
      doc.moveDown(0.5)

      // Hash in monospace-style box
      doc.rect(50, doc.y, 495, 40).fillAndStroke('#f9fafb', '#e5e7eb')
      doc.fillColor('#111111').fontSize(9).font('Courier')
      doc.text(data.fileHash, 60, doc.y - 30, { width: 475, align: 'center' })
      doc.font('Helvetica')
      doc.moveDown(3)

      // QR Code Section
      doc.fillColor('#111111')
      doc.fontSize(11).font('Helvetica-Bold').text('VERIFY THIS CERTIFICATE', { align: 'center' })
      doc.moveDown(0.5)

      // Add QR code
      const qrImageData = qrCodeDataUrl.replace(/^data:image\/png;base64,/, '')
      const qrBuffer = Buffer.from(qrImageData, 'base64')
      const qrX = (doc.page.width - 120) / 2
      doc.image(qrBuffer, qrX, doc.y, { width: 120 })
      doc.moveDown(8)

      doc.fillColor('#666666').fontSize(9).text('Scan to verify or visit:', { align: 'center' })
      doc.fillColor('#7c3aed').text(verifyUrl, { align: 'center', link: verifyUrl })
      doc.moveDown(2)

      // Footer
      doc.strokeColor('#e5e7eb')
      doc.moveTo(50, doc.y).lineTo(545, doc.y).stroke()
      doc.moveDown(1)

      doc.fillColor('#999999').fontSize(8)
      doc.text('This certificate was generated by WhatsTask IP Proof service.', { align: 'center' })
      doc.text('The file hash is permanently anchored to the Bitcoin blockchain via OpenTimestamps.', { align: 'center' })
      doc.moveDown(0.5)
      doc.text(`Certificate ID: ${data.proofId}`, { align: 'center' })
      doc.text(`Generated: ${new Date().toISOString()}`, { align: 'center' })

      doc.end()
    } catch (error) {
      reject(error)
    }
  })
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`
}

function formatDate(date: Date): string {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  })
}

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength - 3) + '...'
}
