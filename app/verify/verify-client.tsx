"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, CheckCircle, Clock, AlertCircle, Download, FileText, Shield, Bitcoin } from "lucide-react"
import Link from "next/link"

interface ProofData {
  fileHash: string
  fileName: string
  status: string
  createdAt: string
  confirmationDate?: string
  bitcoinTxId?: string
  bitcoinBlockHeight?: number
}

interface VerifyResult {
  success: boolean
  exists: boolean
  proof?: ProofData
  message: string
}

export default function VerifyClient() {
  const searchParams = useSearchParams()
  const [hash, setHash] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<VerifyResult | null>(null)
  const [error, setError] = useState("")

  useEffect(() => {
    const hashParam = searchParams.get("hash")
    if (hashParam) {
      setHash(hashParam)
      verifyHash(hashParam)
    }
  }, [searchParams])

  const verifyHash = async (hashToVerify: string) => {
    if (!hashToVerify.trim()) {
      setError("Please enter a file hash")
      return
    }

    if (!/^[a-fA-F0-9]{64}$/.test(hashToVerify.trim())) {
      setError("Invalid hash format. Expected SHA-256 (64 hex characters)")
      return
    }

    setIsLoading(true)
    setError("")
    setResult(null)

    try {
      const response = await fetch(`/api/v1/ip/verify/${hashToVerify.trim().toLowerCase()}`)
      const data: VerifyResult = await response.json()
      setResult(data)
    } catch (err) {
      setError("Failed to verify. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    verifyHash(hash)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="h-6 w-6 text-green-500" />
      case "anchoring":
        return <Clock className="h-6 w-6 text-yellow-500" />
      default:
        return <Clock className="h-6 w-6 text-neutral-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "anchoring":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      default:
        return "bg-neutral-500/20 text-neutral-400 border-neutral-500/30"
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-500/20 mb-6">
            <Shield className="h-8 w-8 text-violet-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Verify IP Proof
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Enter a file hash to verify its blockchain-anchored proof of creation
          </p>
        </section>

        {/* Search Form */}
        <section className="mb-12">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="text"
                value={hash}
                onChange={(e) => setHash(e.target.value)}
                placeholder="Enter SHA-256 file hash (64 characters)"
                className="w-full bg-white/5 border-white/10 text-white placeholder:text-neutral-500 h-14 px-4 text-sm font-mono"
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-violet-500 text-white hover:bg-violet-600 h-14 px-8"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Verifying...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Verify
                </span>
              )}
            </Button>
          </form>

          {error && (
            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm flex items-center gap-2">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              {error}
            </div>
          )}
        </section>

        {/* Results */}
        {result && (
          <section className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
            {result.exists && result.proof ? (
              <>
                {/* Status Header */}
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(result.proof.status)}
                    <div>
                      <h2 className="text-xl font-semibold text-white">Proof Found</h2>
                      <p className="text-sm text-neutral-400">{result.message}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadge(result.proof.status)}`}>
                    {result.proof.status.toUpperCase()}
                  </span>
                </div>

                {/* Proof Details */}
                <div className="p-6 space-y-6">
                  {/* File Info */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-[#0a0a0a] rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-4 w-4 text-neutral-500" />
                        <span className="text-xs text-neutral-500 uppercase tracking-wide">File Name</span>
                      </div>
                      <p className="text-white font-medium truncate">{result.proof.fileName}</p>
                    </div>
                    <div className="p-4 bg-[#0a0a0a] rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-neutral-500" />
                        <span className="text-xs text-neutral-500 uppercase tracking-wide">Registered</span>
                      </div>
                      <p className="text-white font-medium">
                        {new Date(result.proof.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* File Hash */}
                  <div className="p-4 bg-[#0a0a0a] rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-neutral-500" />
                      <span className="text-xs text-neutral-500 uppercase tracking-wide">SHA-256 Hash</span>
                    </div>
                    <p className="text-white font-mono text-sm break-all">{result.proof.fileHash}</p>
                  </div>

                  {/* Bitcoin Info */}
                  {(result.proof.bitcoinTxId || result.proof.bitcoinBlockHeight) && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      {result.proof.bitcoinBlockHeight && (
                        <div className="p-4 bg-[#0a0a0a] rounded-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <Bitcoin className="h-4 w-4 text-orange-500" />
                            <span className="text-xs text-neutral-500 uppercase tracking-wide">Bitcoin Block</span>
                          </div>
                          <p className="text-white font-medium">#{result.proof.bitcoinBlockHeight.toLocaleString()}</p>
                        </div>
                      )}
                      {result.proof.confirmationDate && (
                        <div className="p-4 bg-[#0a0a0a] rounded-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-xs text-neutral-500 uppercase tracking-wide">Confirmed</span>
                          </div>
                          <p className="text-white font-medium">
                            {new Date(result.proof.confirmationDate).toLocaleString()}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {result.proof.bitcoinTxId && (
                    <div className="p-4 bg-[#0a0a0a] rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Bitcoin className="h-4 w-4 text-orange-500" />
                        <span className="text-xs text-neutral-500 uppercase tracking-wide">Bitcoin Transaction</span>
                      </div>
                      <a
                        href={`https://mempool.space/tx/${result.proof.bitcoinTxId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-400 hover:text-violet-300 font-mono text-sm break-all"
                      >
                        {result.proof.bitcoinTxId}
                      </a>
                    </div>
                  )}

                  {/* Download Certificate */}
                  <div className="pt-4 border-t border-white/10">
                    <Button
                      asChild
                      className="w-full sm:w-auto bg-white text-black hover:bg-neutral-200 h-12"
                    >
                      <a href={`/api/v1/ip/certificate/${result.proof.fileHash}`} download>
                        <Download className="h-4 w-4 mr-2" />
                        Download Certificate (PDF)
                      </a>
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="p-12 text-center">
                <AlertCircle className="h-12 w-12 text-neutral-500 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-white mb-2">No Proof Found</h2>
                <p className="text-neutral-400 mb-6">
                  This file hash has not been registered with WhatsTask IP Proof.
                </p>
                <Button asChild className="bg-violet-500 text-white hover:bg-violet-600">
                  <Link href="/ip-proof">Register Your Work</Link>
                </Button>
              </div>
            )}
          </section>
        )}

        {/* How It Works */}
        {!result && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">How Verification Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Enter File Hash",
                  description: "Paste the SHA-256 hash of your file or scan the QR code from your certificate",
                },
                {
                  step: "2",
                  title: "Check Blockchain",
                  description: "We verify the hash exists in our database and check its Bitcoin blockchain status",
                },
                {
                  step: "3",
                  title: "View Proof",
                  description: "See when the file was registered and its confirmation status on Bitcoin",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:border-white/20 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-sm font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-neutral-500">
          <p>WhatsTask IP Proof - Blockchain-verified proof of creation</p>
        </div>
      </footer>
    </div>
  )
}
