import React from 'react'
import Script from 'next/script'
import Image from 'next/image'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>
      <Image src="/img/InHeritas-Dev-Logo.svg" alt="Logo" width={120} height={30} />
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
  darkMode: false,
  gitTimestamp: false
}

export default config
