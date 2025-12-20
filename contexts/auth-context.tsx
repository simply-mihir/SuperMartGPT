"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { supabase } from "@/lib/supabaseClient"
import type { User, Session } from "@supabase/supabase-js"

interface AuthContextType {
  user: User | null
  session: Session | null
  isLoading: boolean
  isAuthenticated: boolean
  signInWithOtp: (email: string) => Promise<{ success: boolean; error?: string }>
  verifyOtp: (email: string, token: string) => Promise<{ success: boolean; error?: string }>
  signOut: () => Promise<void>
  getUserInitials: () => string
  getUserEmail: () => string
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  isLoading: true,
  isAuthenticated: false,
  signInWithOtp: async () => ({ success: false }),
  verifyOtp: async () => ({ success: false }),
  signOut: async () => {},
  getUserInitials: () => "",
  getUserEmail: () => "",
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    const initSession = async () => {
      try {
        const { data: { session: initialSession } } = await supabase.auth.getSession()
        setSession(initialSession)
        setUser(initialSession?.user ?? null)
      } catch (error) {
        console.error("[Auth] Error getting initial session:", error)
      } finally {
        setIsLoading(false)
      }
    }

    initSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, newSession) => {
        console.log("[Auth] Auth state changed:", event)
        setSession(newSession)
        setUser(newSession?.user ?? null)
        setIsLoading(false)
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const signInWithOtp = async (email: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: true,
        },
      })

      if (error) {
        console.error("[Auth] OTP send error:", error)
        return { success: false, error: error.message }
      }

      return { success: true }
    } catch (error: any) {
      console.error("[Auth] OTP send exception:", error)
      return { success: false, error: error.message || "Failed to send OTP" }
    }
  }

  const verifyOtp = async (email: string, token: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token,
        type: "email",
      })

      if (error) {
        console.error("[Auth] OTP verify error:", error)
        return { success: false, error: error.message }
      }

      if (data.session) {
        setSession(data.session)
        setUser(data.user)
        return { success: true }
      }

      return { success: false, error: "Verification failed" }
    } catch (error: any) {
      console.error("[Auth] OTP verify exception:", error)
      return { success: false, error: error.message || "Verification failed" }
    }
  }

  const signOut = async () => {
    try {
      await supabase.auth.signOut()
      setUser(null)
      setSession(null)
    } catch (error) {
      console.error("[Auth] Sign out error:", error)
    }
  }

  const getUserInitials = (): string => {
    if (!user?.email) return "?"
    const email = user.email
    const name = email.split("@")[0]
    if (name.length >= 2) {
      return name.substring(0, 2).toUpperCase()
    }
    return name.toUpperCase()
  }

  const getUserEmail = (): string => {
    return user?.email || ""
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        isLoading,
        isAuthenticated: !!user,
        signInWithOtp,
        verifyOtp,
        signOut,
        getUserInitials,
        getUserEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}



