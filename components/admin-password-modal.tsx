"use client"

import { useState } from "react"
import { X, Lock, Loader2, ShieldCheck, AlertCircle } from "lucide-react"
import { type Language } from "@/lib/translations"

interface AdminPasswordModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  language: Language
}

const ADMIN_PASSWORD = "admin20"

export function AdminPasswordModal({ isOpen, onClose, onSuccess, language }: AdminPasswordModalProps) {
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!password.trim()) {
      setError("Please enter the admin password")
      return
    }

    setIsLoading(true)
    setError(null)

    // Simulate brief loading
    await new Promise(resolve => setTimeout(resolve, 500))

    if (password === ADMIN_PASSWORD) {
      setIsLoading(false)
      setPassword("")
      onSuccess()
    } else {
      setIsLoading(false)
      setError("Incorrect password. Please try again.")
      setPassword("")
    }
  }

  const handleClose = () => {
    setPassword("")
    setError(null)
    onClose()
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={handleClose}
      />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-scale-in">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Admin Access</h2>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <p className="text-gray-600 text-sm mb-6">
            Enter the admin password to access Sales Analytics.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Admin Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  disabled={isLoading}
                  autoFocus
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || !password.trim()}
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5" />
                  Access Analytics
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}



