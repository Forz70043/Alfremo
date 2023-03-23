import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(App)