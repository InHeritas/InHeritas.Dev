import { config } from '@fortawesome/fontawesome-svg-core'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@fortawesome/fontawesome-svg-core/styles.css'
import '/public/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </>
  )
};