import React from 'react'
import Script from 'next/script'
import Image from 'next/image'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>
      <Image src="/img/logo.png" alt="Logo" width={120} height={30} />
    </span>,
  footer: {
    text: (
      <span>
        <p className="text-xs">
          © {new Date().getFullYear()} InHeritas
        </p>
      </span>
    )
  },
  head: (
    <>
      <Script 
        src="https://ryj9d86xjh.execute-api.ap-northeast-2.amazonaws.com/v1/api/fontstream/djs/?sid=gAAAAABkdUt-7O7BL6uR0fYqvxMIchs6KNCQVUp924pT2YaH9_V3IMQtHqHN72hAPhIqooO5hT2s2VROhCrzUfBlPyrN-ORbmgo6MJqCkSB0ipc9at_rg6s9AwXVJVU9ZFA7hco6wwBB4AIwX_2q_rsSDipqvIBKpNqgTWmQq1GV8qlteBEGUYot5ldhjEGfc-PcftnzfBjYIjKT1ICTOsoGmCP5kqYpk-boQU7mvc8Eos5pvV_AH1FEqyzx6FvMmRHrEWqHrziu"
        type="module"
        strategy="beforeInteractive"
      />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </>
  ),
  feedback: {
      content: null
  },
  editLink: {
    text: null
  },
  navigation: {
    prev: false,
    next: false
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s'
    }
  },
  darkMode: false
}

export default config
