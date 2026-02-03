import React, { useEffect } from 'react'

export default function PWAInstallModal({ open, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pwa-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-md rounded-lg bg-[#161104] border border-white/10 p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 id="pwa-modal-title" className="text-xl font-semibold text-white">
            Download started
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 -m-2 text-white/70 hover:text-white rounded focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-[#F5F5F5] text-sm leading-relaxed">
          You’ve been redirected to download Pryzen. On mobile you can also add this site to your home screen for an app-like experience.
        </p>
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}
