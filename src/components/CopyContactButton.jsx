import { useEffect, useRef, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export function CopyContactButton({ label, value }) {
  const { language, copy } = useLanguage()
  const [status, setStatus] = useState('idle')
  const resetTimer = useRef(null)

  useEffect(
    () => () => {
      if (resetTimer.current) window.clearTimeout(resetTimer.current)
    },
    [],
  )

  const copyValue = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setStatus('copied')
      resetTimer.current = window.setTimeout(() => setStatus('idle'), 2200)
    } catch {
      setStatus('failed')
    }
  }

  return (
    <div className="copy-contact-action">
      <button
        type="button"
        onClick={copyValue}
        aria-label={language === 'en' ? `Copy ${label}` : `复制${label}`}
      >
        {status === 'copied' ? (
          <Check aria-hidden="true" size={17} />
        ) : (
          <Copy aria-hidden="true" size={17} />
        )}
        {status === 'copied' ? copy.shared.copied : copy.shared.copy}
      </button>
      <span className="sr-only" aria-live="polite">
        {status === 'copied'
          ? language === 'en' ? `${label} copied` : `${label}已复制`
          : status === 'failed'
            ? copy.shared.copyFailed
            : ''}
      </span>
    </div>
  )
}
