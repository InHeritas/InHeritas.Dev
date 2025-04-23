import nextra from 'nextra'
import type { NextConfig } from 'next'

const withNextra = nextra({
    // ... Other Nextra config options
})

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
    // ... Other Next.js config options
} as NextConfig)