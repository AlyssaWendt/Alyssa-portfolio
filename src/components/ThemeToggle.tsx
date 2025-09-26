'use client'

import { useEffect, useState } from 'react'
import styles from '@/styles/components/theme-toggle.module.scss'

function getInitialTheme() {
    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('theme')
        if (stored === 'light') return false
    }
    return true // default to dark
}

export default function ThemeToggle() {
    const [dark, setDark] = useState(getInitialTheme)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark)
        document.documentElement.classList.toggle('light', !dark)
        localStorage.setItem('theme', dark ? 'dark' : 'light')
    }, [dark])

    if (!mounted) return null

    return (
        <button
            aria-label='Toggle theme'
            onClick={() => setDark(d => !d)}
			className={styles.themeToggleBtn}
        >
            {dark ? '🌙' : '☀️'}
        </button>
    )
}
