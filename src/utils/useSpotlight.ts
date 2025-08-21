import { useRef, useEffect } from 'react'

export interface SpotlightOptions {
  // Optional parameters for customizing the spotlight effect
  borderColor?: string
  spotlightSize?: number
}

export function useSpotlight<T extends HTMLElement>() {
  const elementRef = useRef<T>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      element.style.setProperty('--x', `${x}px`)
      element.style.setProperty('--y', `${y}px`)
    }

    element.addEventListener('mousemove', handleMouseMove)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return elementRef
}
