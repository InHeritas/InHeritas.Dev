import nextra from 'nextra'
import type { NextConfig } from 'next'

const withNextra = nextra({
    // ... Other Nextra config options
})

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
    // Keep Next.js file tracing scoped to this Vercel project when a parent
    // directory contains an unrelated lockfile.
    outputFileTracingRoot: process.cwd(),
    agentRules: false,
    poweredByHeader: false,
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=()',
                    },
                ],
            },
        ]
    },
} as NextConfig)
