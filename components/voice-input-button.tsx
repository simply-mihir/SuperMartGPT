"use client"

import { useState, useRef, useCallback } from "react"
import { Mic, MicOff, Loader2 } from "lucide-react"
import { type Language, t } from "@/lib/translations"

interface VoiceInputButtonProps {
  language: Language
  onTranscript: (text: string) => void
  disabled?: boolean
  autoSend?: boolean
}

export function VoiceInputButton({ language, onTranscript, disabled, autoSend = true }: VoiceInputButtonProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])

  // Map language to Whisper-compatible language code
  const getWhisperLangCode = (lang: Language): string => {
    const langMap: Record<Language, string> = {
      english: "en",
      hindi: "hi",
      marathi: "mr",
      bengali: "bn",
      telugu: "te",
      tamil: "ta",
      gujarati: "gu",
      kannada: "kn",
      malayalam: "ml",
      punjabi: "pa",
      odia: "or",
      urdu: "ur",
      nepali: "ne",
      sinhala: "si",
      arabic: "ar",
    }
    return langMap[lang] || "en"
  }

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
          ? "audio/webm;codecs=opus"
          : "audio/webm",
      })
      
      mediaRecorderRef.current = mediaRecorder
      chunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = async () => {
        // Stop all tracks
        stream.getTracks().forEach((track) => track.stop())
        
        if (chunksRef.current.length === 0) {
          console.warn("[VoiceInput] No audio data recorded")
          return
        }

        setIsProcessing(true)

        try {
          const audioBlob = new Blob(chunksRef.current, { type: "audio/webm" })
          
          const formData = new FormData()
          formData.append("file", audioBlob, "recording.webm")
          formData.append("language", getWhisperLangCode(language))

          console.log("[VoiceInput] Sending audio to /api/voice")
          
          const response = await fetch("/api/voice", {
            method: "POST",
            body: formData,
          })

          const data = await response.json()
          
          if (data.success && data.data?.text) {
            console.log("[VoiceInput] Transcription:", data.data.text)
            onTranscript(data.data.text)
          } else {
            console.error("[VoiceInput] Transcription failed:", data.error)
          }
        } catch (error) {
          console.error("[VoiceInput] Error processing audio:", error)
        } finally {
          setIsProcessing(false)
        }
      }

      mediaRecorder.start()
      setIsRecording(true)
      console.log("[VoiceInput] Recording started")
    } catch (error) {
      console.error("[VoiceInput] Failed to start recording:", error)
      alert("Could not access microphone. Please check permissions.")
    }
  }, [language, onTranscript])

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      console.log("[VoiceInput] Recording stopped")
    }
  }, [])

  const handleClick = () => {
    if (isRecording) {
      stopRecording()
    } else {
      startRecording()
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled || isProcessing}
      className={`relative p-1.5 rounded-full transition-all duration-200 ${
        isRecording
          ? "bg-red-500 text-white"
          : isProcessing
          ? "bg-primary/20 text-primary"
          : "text-muted-foreground hover:text-primary hover:bg-primary/10"
      }`}
      aria-label={isRecording ? "Stop recording" : "Voice input"}
    >
      {isProcessing ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : isRecording ? (
        <>
          <MicOff className="w-5 h-5 relative z-10" />
          {/* Listening animation - pulsing rings */}
          <span className="absolute inset-0 rounded-full animate-ping bg-red-500/50" />
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-red-500 z-10">
            {t("listening", language)}
          </span>
        </>
      ) : (
        <Mic className="w-5 h-5" />
      )}
    </button>
  )
}
