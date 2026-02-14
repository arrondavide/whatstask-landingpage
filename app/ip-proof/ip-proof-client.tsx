"use client"

import { useState, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { jsPDF } from "jspdf"
import {
  Shield,
  Upload,
  FileCheck,
  CheckCircle,
  Clock,
  AlertCircle,
  Download,
  Copy,
  File,
  Bitcoin,
  Lock,
  Zap,
  Globe,
  ArrowRight,
} from "lucide-react"

interface ProofResult {
  success: boolean
  proofId?: string
  fileHash?: string
  status?: string
  createdAt?: string
  message: string
  existingProofId?: string
}

type Step = "upload" | "hashing" | "registering" | "complete" | "error"

export default function IPProofClient() {
  const [step, setStep] = useState<Step>("upload")
  const [file, setFile] = useState<File | null>(null)
  const [fileHash, setFileHash] = useState<string>("")
  const [isDragging, setIsDragging] = useState(false)
  const [hashProgress, setHashProgress] = useState(0)
  const [result, setResult] = useState<ProofResult | null>(null)
  const [error, setError] = useState<string>("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const features = [
    {
      icon: <Bitcoin className="h-6 w-6" />,
      title: "Bitcoin Blockchain Security",
      description: "Your proof is anchored to the most secure blockchain in existence.",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Zero-Knowledge Privacy",
      description: "Files never leave your device. Only the hash is stored.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Registration",
      description: "Create proofs in seconds. Bitcoin confirmation in 1-2 hours.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Globally Verifiable",
      description: "Anyone can verify using the public Bitcoin blockchain.",
    },
  ]

  const hashFile = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const chunkSize = 2 * 1024 * 1024 // 2MB chunks for progress
      let offset = 0

      const hashChunks = async () => {
        const chunks: ArrayBuffer[] = []

        while (offset < file.size) {
          const chunk = file.slice(offset, offset + chunkSize)
          const buffer = await chunk.arrayBuffer()
          chunks.push(buffer)
          offset += chunkSize
          setHashProgress(Math.min(95, Math.round((offset / file.size) * 100)))
        }

        // Combine all chunks
        const totalLength = chunks.reduce((acc, chunk) => acc + chunk.byteLength, 0)
        const combined = new Uint8Array(totalLength)
        let position = 0
        for (const chunk of chunks) {
          combined.set(new Uint8Array(chunk), position)
          position += chunk.byteLength
        }

        // Hash the combined data
        const hashBuffer = await crypto.subtle.digest("SHA-256", combined)
        const hashArray = Array.from(new Uint8Array(hashBuffer))
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("")
        setHashProgress(100)
        resolve(hashHex)
      }

      hashChunks().catch(reject)
    })
  }

  const generateCertificatePDF = () => {
    if (!file || !fileHash || !result) return

    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 20
    let y = 30

    // Header
    doc.setFontSize(24)
    doc.setTextColor(124, 58, 237) // violet-500
    doc.text("IP PROOF CERTIFICATE", pageWidth / 2, y, { align: "center" })
    y += 10

    doc.setFontSize(12)
    doc.setTextColor(100, 100, 100)
    doc.text("Blockchain-Verified Proof of Creation", pageWidth / 2, y, { align: "center" })
    y += 15

    // Line
    doc.setDrawColor(229, 231, 235)
    doc.line(margin, y, pageWidth - margin, y)
    y += 15

    // Certificate Details
    doc.setFontSize(11)
    doc.setTextColor(17, 17, 17)
    doc.setFont("helvetica", "bold")
    doc.text("CERTIFICATE DETAILS", margin, y)
    y += 10

    doc.setFont("helvetica", "normal")
    doc.setFontSize(10)

    // File Name
    doc.setTextColor(100, 100, 100)
    doc.text("File Name:", margin, y)
    doc.setTextColor(17, 17, 17)
    const truncatedName = file.name.length > 50 ? file.name.substring(0, 47) + "..." : file.name
    doc.text(truncatedName, margin + 50, y)
    y += 8

    // File Size
    doc.setTextColor(100, 100, 100)
    doc.text("File Size:", margin, y)
    doc.setTextColor(17, 17, 17)
    doc.text(formatFileSize(file.size), margin + 50, y)
    y += 8

    // Registration Date
    doc.setTextColor(100, 100, 100)
    doc.text("Registration Date:", margin, y)
    doc.setTextColor(17, 17, 17)
    doc.text(result.createdAt ? new Date(result.createdAt).toLocaleString() : new Date().toLocaleString(), margin + 50, y)
    y += 8

    // Status
    doc.setTextColor(100, 100, 100)
    doc.text("Status:", margin, y)
    doc.setTextColor(217, 119, 6) // yellow/amber for anchoring
    doc.setFont("helvetica", "bold")
    doc.text((result.status || "ANCHORING").toUpperCase(), margin + 50, y)
    doc.setFont("helvetica", "normal")
    y += 20

    // Line
    doc.setDrawColor(229, 231, 235)
    doc.line(margin, y, pageWidth - margin, y)
    y += 15

    // SHA-256 Hash Section
    doc.setFontSize(11)
    doc.setTextColor(17, 17, 17)
    doc.setFont("helvetica", "bold")
    doc.text("SHA-256 FILE HASH", margin, y)
    y += 10

    // Hash box
    doc.setFillColor(249, 250, 251)
    doc.setDrawColor(229, 231, 235)
    doc.roundedRect(margin, y, pageWidth - margin * 2, 20, 3, 3, "FD")

    doc.setFont("courier", "normal")
    doc.setFontSize(8)
    doc.setTextColor(17, 17, 17)
    // Split hash into two lines for readability
    const hash1 = fileHash.substring(0, 32)
    const hash2 = fileHash.substring(32)
    doc.text(hash1, pageWidth / 2, y + 7, { align: "center" })
    doc.text(hash2, pageWidth / 2, y + 13, { align: "center" })
    y += 30

    // Verification Section
    doc.setFont("helvetica", "bold")
    doc.setFontSize(11)
    doc.setTextColor(17, 17, 17)
    doc.text("VERIFY THIS CERTIFICATE", pageWidth / 2, y, { align: "center" })
    y += 10

    doc.setFont("helvetica", "normal")
    doc.setFontSize(9)
    doc.setTextColor(100, 100, 100)
    doc.text("Visit the following URL to verify:", pageWidth / 2, y, { align: "center" })
    y += 8

    const verifyUrl = `https://www.whatstask.com/verify?hash=${fileHash}`
    doc.setTextColor(124, 58, 237)
    doc.textWithLink(verifyUrl, pageWidth / 2 - doc.getTextWidth(verifyUrl) / 2, y, { url: verifyUrl })
    y += 20

    // Line
    doc.setDrawColor(229, 231, 235)
    doc.line(margin, y, pageWidth - margin, y)
    y += 10

    // Footer
    doc.setFontSize(8)
    doc.setTextColor(150, 150, 150)
    doc.text("This certificate was generated by WhatsTask IP Proof service.", pageWidth / 2, y, { align: "center" })
    y += 5
    doc.text("The file hash is anchored to the Bitcoin blockchain via OpenTimestamps.", pageWidth / 2, y, { align: "center" })
    y += 8
    doc.text(`Certificate ID: ${result.proofId || "pending"}`, pageWidth / 2, y, { align: "center" })
    y += 5
    doc.text(`Generated: ${new Date().toISOString()}`, pageWidth / 2, y, { align: "center" })

    // Save PDF
    doc.save(`ip-proof-${fileHash.substring(0, 8)}.pdf`)
  }

  const handleFile = async (selectedFile: File) => {
    setFile(selectedFile)
    setStep("hashing")
    setError("")
    setHashProgress(0)

    try {
      // Hash the file
      const hash = await hashFile(selectedFile)
      setFileHash(hash)
      setStep("registering")

      // Register with API
      const response = await fetch("/api/v1/ip/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileHash: hash,
          fileName: selectedFile.name,
          fileSize: selectedFile.size,
          mimeType: selectedFile.type || "application/octet-stream",
          userId: "web-user", // Anonymous web user
        }),
      })

      const data: ProofResult = await response.json()

      if (response.ok || response.status === 409) {
        setResult(data)
        setStep("complete")
      } else {
        setError(data.message || "Registration failed")
        setStep("error")
      }
    } catch (err) {
      setError("Failed to process file. Please try again.")
      setStep("error")
    }
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      handleFile(droppedFile)
    }
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      handleFile(selectedFile)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const reset = () => {
    setStep("upload")
    setFile(null)
    setFileHash("")
    setResult(null)
    setError("")
    setHashProgress(0)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Hero */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-400 text-sm mb-6">
            <Shield className="h-4 w-4" />
            Powered by Bitcoin & OpenTimestamps
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
            IP Proof
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Timestamp your creative work on the Bitcoin blockchain. Prove when you created something -
            your file never leaves your device.
          </p>
        </section>

        {/* Main Tool */}
        <section className="mb-20">
          <div className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
            {/* Upload Step */}
            {step === "upload" && (
              <div
                className={`p-12 transition-all ${
                  isDragging ? "bg-violet-500/10 border-violet-500" : ""
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 transition-all ${
                    isDragging ? "bg-violet-500/30" : "bg-violet-500/20"
                  }`}>
                    <Upload className={`h-10 w-10 transition-all ${isDragging ? "text-violet-300" : "text-violet-400"}`} />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Drop your file here
                  </h2>
                  <p className="text-neutral-400 mb-6">
                    or click to browse. Your file stays on your device - only the fingerprint is stored.
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileInput}
                    className="hidden"
                    id="file-input"
                  />
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-violet-500 hover:bg-violet-600 text-white px-8 py-6 text-lg rounded-full"
                  >
                    Select File
                  </Button>
                  <p className="text-xs text-neutral-500 mt-6">
                    Supports any file type. Maximum recommended size: 500MB
                  </p>
                </div>
              </div>
            )}

            {/* Hashing Step */}
            {step === "hashing" && file && (
              <div className="p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-violet-500/20 mb-6">
                  <div className="w-10 h-10 border-3 border-violet-400 border-t-transparent rounded-full animate-spin" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Creating fingerprint...
                </h2>
                <p className="text-neutral-400 mb-6">
                  Generating SHA-256 hash locally in your browser
                </p>
                <div className="max-w-md mx-auto">
                  <div className="flex items-center gap-3 p-4 bg-[#0a0a0a] rounded-xl mb-4">
                    <File className="h-5 w-5 text-neutral-500" />
                    <div className="flex-1 text-left">
                      <p className="text-sm text-white truncate">{file.name}</p>
                      <p className="text-xs text-neutral-500">{formatFileSize(file.size)}</p>
                    </div>
                  </div>
                  <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-violet-500 transition-all duration-300"
                      style={{ width: `${hashProgress}%` }}
                    />
                  </div>
                  <p className="text-sm text-neutral-500 mt-2">{hashProgress}%</p>
                </div>
              </div>
            )}

            {/* Registering Step */}
            {step === "registering" && (
              <div className="p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-violet-500/20 mb-6">
                  <div className="w-10 h-10 border-3 border-violet-400 border-t-transparent rounded-full animate-spin" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Registering on blockchain...
                </h2>
                <p className="text-neutral-400 mb-6">
                  Submitting your proof to the Bitcoin network
                </p>
                {fileHash && (
                  <div className="max-w-lg mx-auto p-4 bg-[#0a0a0a] rounded-xl">
                    <p className="text-xs text-neutral-500 mb-1">SHA-256 Hash</p>
                    <p className="text-xs font-mono text-neutral-300 break-all">{fileHash}</p>
                  </div>
                )}
              </div>
            )}

            {/* Complete Step */}
            {step === "complete" && result && (
              <div className="p-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-green-500/20 mb-6">
                    <CheckCircle className="h-10 w-10 text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {result.existingProofId ? "Already Registered!" : "Proof Created!"}
                  </h2>
                  <p className="text-neutral-400">
                    {result.message}
                  </p>
                </div>

                <div className="max-w-lg mx-auto space-y-4">
                  {/* File Info */}
                  {file && (
                    <div className="p-4 bg-[#0a0a0a] rounded-xl">
                      <div className="flex items-center gap-3">
                        <FileCheck className="h-5 w-5 text-green-400" />
                        <div className="flex-1">
                          <p className="text-sm text-white truncate">{file.name}</p>
                          <p className="text-xs text-neutral-500">{formatFileSize(file.size)}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Hash */}
                  <div className="p-4 bg-[#0a0a0a] rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-neutral-500">SHA-256 Hash</span>
                      <button
                        onClick={() => copyToClipboard(fileHash)}
                        className="text-xs text-violet-400 hover:text-violet-300 flex items-center gap-1"
                      >
                        <Copy className="h-3 w-3" />
                        Copy
                      </button>
                    </div>
                    <p className="text-xs font-mono text-neutral-300 break-all">{fileHash}</p>
                  </div>

                  {/* Status */}
                  <div className="p-4 bg-[#0a0a0a] rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm text-neutral-300">Status</span>
                    </div>
                    <span className="text-sm text-yellow-400 font-medium uppercase">
                      {result.status || "Anchoring"}
                    </span>
                  </div>

                  {/* Timestamp */}
                  {result.createdAt && (
                    <div className="p-4 bg-[#0a0a0a] rounded-xl flex items-center justify-between">
                      <span className="text-sm text-neutral-500">Registered</span>
                      <span className="text-sm text-neutral-300">
                        {new Date(result.createdAt).toLocaleString()}
                      </span>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={generateCertificatePDF}
                      className="flex-1 bg-violet-500 hover:bg-violet-600 text-white"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Certificate
                    </Button>
                    <Button
                      onClick={reset}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      New Proof
                    </Button>
                  </div>

                  <p className="text-xs text-neutral-500 text-center pt-2">
                    Bitcoin confirmation typically takes 1-2 hours. Check status at{" "}
                    <Link href={`/verify?hash=${fileHash}`} className="text-violet-400 hover:text-violet-300">
                      /verify
                    </Link>
                  </p>
                </div>
              </div>
            )}

            {/* Error Step */}
            {step === "error" && (
              <div className="p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-red-500/20 mb-6">
                  <AlertCircle className="h-10 w-10 text-red-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Something went wrong
                </h2>
                <p className="text-neutral-400 mb-6">{error}</p>
                <Button
                  onClick={reset}
                  className="bg-violet-500 hover:bg-violet-600 text-white"
                >
                  Try Again
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 border border-white/10 rounded-2xl bg-white/5 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-500/20 text-violet-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Verify CTA */}
        <section className="text-center">
          <div className="inline-block p-8 border border-white/10 rounded-2xl bg-white/5">
            <h3 className="text-xl font-bold text-white mb-2">Already have a proof?</h3>
            <p className="text-neutral-400 mb-4">Verify any file against our blockchain records</p>
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Link href="/verify">
                Go to Verification
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-neutral-500">
          <p>IP Proof is powered by OpenTimestamps, an open protocol for blockchain timestamps.</p>
        </div>
      </footer>
    </div>
  )
}
