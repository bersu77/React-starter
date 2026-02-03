import React, { useEffect } from 'react'

const AUTH_URL = 'https://www.pryzen.io/auth'

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

  const handleGoToInstall = () => {
    window.open(AUTH_URL, '_blank', 'noopener,noreferrer')
  }

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
      <div className="relative z-10 w-full max-w-lg rounded-lg bg-[#161104] border border-white/10 p-6 shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 id="pwa-modal-title" className="text-xl font-semibold text-white">
            Install Pryzen as an app (PWA)
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

        <p className="text-white text-sm leading-relaxed mb-6">
          Open{' '}
          <a
            href={AUTH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a855f7] hover:text-[#c084fc] underline"
          >
            pryzen.io/auth
          </a>{' '}
          in your browser, then follow the steps below for your device.
        </p>

        {/* iPhone / iPad */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-6 h-6 rounded bg-white/20 text-white text-sm font-medium">1</span>
            <h3 className="text-white font-medium">iPhone / iPad (Safari)</h3>
          </div>
          <ol className="list-decimal list-inside space-y-2 text-[#F5F5F5] text-sm leading-relaxed">
            <li>Open <strong className="text-white">https://www.pryzen.io/auth</strong> in Safari.</li>
            <li>Tap the <strong className="text-white">Share</strong> button (at the bottom).</li>
            <li>Scroll and tap &quot;<strong className="text-white">Add to Home Screen</strong>&quot;.</li>
            <li>Tap &quot;<strong className="text-white">Add</strong>&quot; in the top right.</li>
          </ol>
        </div>

        {/* Android */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-6 h-6 rounded bg-white/20 text-white text-sm font-medium">2</span>
            <h3 className="text-white font-medium">Android (Chrome)</h3>
          </div>
          <ol className="list-decimal list-inside space-y-2 text-[#F5F5F5] text-sm leading-relaxed">
            <li>Open <strong className="text-white">https://www.pryzen.io/auth</strong> in Chrome.</li>
            <li>Tap the <strong className="text-white">⋮</strong> menu (top right).</li>
            <li>Tap &quot;<strong className="text-white">Install app</strong>&quot; or &quot;<strong className="text-white">Add to Home screen</strong>&quot;.</li>
            <li>Confirm with &quot;<strong className="text-white">Install</strong>&quot;.</li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <button
            type="button"
            onClick={handleGoToInstall}
            className="px-5 py-2.5 text-sm font-medium text-white bg-[#a855f7] hover:bg-[#9333ea] rounded transition-colors"
          >
            Go to Install page
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}
