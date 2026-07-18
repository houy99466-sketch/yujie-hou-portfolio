import { useEffect, useRef, useState } from 'react'
import { Check, Copy } from 'lucide-react'

export function CopyContactButton({ label, value }) {
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
      <button type="button" onClick={copyValue} aria-label={`复制${label}`}>
        {status === 'copied' ? (
          <Check aria-hidden="true" size={17} />
        ) : (
          <Copy aria-hidden="true" size={17} />
        )}
        {status === 'copied' ? '已复制' : '复制'}
      </button>
      <span className="sr-only" aria-live="polite">
        {status === 'copied'
          ? `${label}已复制`
          : status === 'failed'
            ? '复制失败，请手动复制'
            : ''}
      </span>
    </div>
  )
}
