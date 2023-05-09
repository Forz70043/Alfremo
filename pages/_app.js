import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { SessionProvider } from "next-auth/react"
import { appWithTranslation } from 'next-i18next'

function App({ 
  Component, 
  pageProps
}) {

  //const { data: session, status } = useSession();
  /*if (status === "authenticated") {
    console.log("AUTHenticated");
  }*/

  return (
    <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </SessionProvider>
  )
}

export default appWithTranslation(App)