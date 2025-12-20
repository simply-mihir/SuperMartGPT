"use client"

import { useState } from "react"
import { X, Mail, Key, Loader2, CheckCircle, LogOut, User } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { type Language, t } from "@/lib/translations"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  language: Language
}

type AuthStep = "email" | "otp" | "success"

export function AuthModal({ isOpen, onClose, language }: AuthModalProps) {
  const { signInWithOtp, verifyOtp, isAuthenticated, signOut, getUserEmail, getUserInitials } = useAuth()
  const [step, setStep] = useState<AuthStep>("email")
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!isOpen) return null

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) {
      setError("Please enter your email address")
      return
    }

    setIsLoading(true)
    setError(null)

    const result = await signInWithOtp(email.trim())
    
    setIsLoading(false)

    if (result.success) {
      setStep("otp")
    } else {
      setError(result.error || "Failed to send OTP. Please try again.")
    }
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!otp.trim()) {
      setError("Please enter the OTP")
      return
    }

    setIsLoading(true)
    setError(null)

    const result = await verifyOtp(email.trim(), otp.trim())
    
    setIsLoading(false)

    if (result.success) {
      setStep("success")
      setTimeout(() => {
        onClose()
        setStep("email")
        setEmail("")
        setOtp("")
      }, 1500)
    } else {
      setError(result.error || "Invalid OTP. Please try again.")
    }
  }

  const handleSignOut = async () => {
    await signOut()
    onClose()
    setStep("email")
    setEmail("")
    setOtp("")
  }

  const handleClose = () => {
    onClose()
    setError(null)
    if (!isAuthenticated) {
      setStep("email")
      setEmail("")
      setOtp("")
    }
  }

  // If user is authenticated, show profile
  if (isAuthenticated) {
    return (
      <>
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          onClick={handleClose}
        />
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-scale-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Your Account</h2>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="flex flex-col items-center py-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-2xl font-bold mb-4">
                {getUserInitials()}
              </div>
              <p className="text-gray-600 mb-6">{getUserEmail()}</p>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 px-6 py-3 bg-red-50 text-red-600 rounded-xl font-medium hover:bg-red-100 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </>
    )
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
            <h2 className="text-xl font-bold text-gray-800">
              {step === "email" && "Sign In / Sign Up"}
              {step === "otp" && "Enter OTP"}
              {step === "success" && "Success!"}
            </h2>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {step === "email" && (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">{error}</p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending OTP...
                  </>
                ) : (
                  "Send OTP"
                )}
              </button>

              <p className="text-center text-sm text-gray-500">
                We'll send a one-time password to your email
              </p>
            </form>
          )}

          {step === "otp" && (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <p className="text-gray-600 text-sm mb-4">
                We sent a 6-digit code to <strong>{email}</strong>
              </p>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter OTP
                </label>
                <div className="relative">
                  <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    placeholder="123456"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-center text-2xl tracking-widest font-mono"
                    maxLength={6}
                    disabled={isLoading}
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">{error}</p>
              )}

              <button
                type="submit"
                disabled={isLoading || otp.length < 6}
                className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify OTP"
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setStep("email")
                  setOtp("")
                  setError(null)
                }}
                className="w-full py-2 text-gray-500 hover:text-gray-700 text-sm"
              >
                ← Change email
              </button>
            </form>
          )}

          {step === "success" && (
            <div className="flex flex-col items-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-lg font-medium text-gray-800">Welcome to SuperMartGPT!</p>
              <p className="text-gray-500 text-sm mt-2">You're now signed in</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}



