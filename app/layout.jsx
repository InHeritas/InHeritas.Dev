import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Analytics } from '@vercel/analytics/next';
import Image from 'next/image'
import '../styles/globals.css'
 
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const navbar = (
  <Navbar
    logo={<Image src="/img/InHeritas-Dev-Logo.svg" alt="Logo" width={120} height={30} />}
    // ... Your additional navbar options
  />
)
const footer = <Footer>© {new Date().getFullYear()} InHeritas</Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="ko"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
          <Layout
            navbar={navbar}
            pageMap={await getPageMap()}
            footer={footer}
            editLink={null}
            feedback={{ content: null }}
            sidebar={{ defaultMenuCollapseLevel: 2, toggleButton: false }}
            nextThemes={{ defaultTheme: 'light' }}
            darkMode={false}
          >
          {children}
          <Analytics />
        </Layout>
      </body>
    </html>
  )
}