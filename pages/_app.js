import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { SessionProvider } from "next-auth/react"
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { userService } from 'services';
import { Alert } from '@/components/Alert'

function App({ Component, pageProps }) {

  //const { data: session, status } = useSession();
  /*if (status === "authenticated") {
    console.log("AUTHenticated");
  }*/
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // on initial load - run auth check 
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false  
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check 
    router.events.on('routeChangeComplete', authCheck)

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    }
  }, []);

  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in 
    setUser(userService.userValue);
    const publicPaths = ['/login', '/register', '/', '/changelog', '/privacy', '/terms', '/forgot-password'];
    const path = url.split('?')[0];
    if (!userService.userValue && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: '/',
        query: { returnUrl: router.asPath }
      });
    } else {
      setAuthorized(true);
    }
  }

  return (
    <SessionProvider session={pageProps.session}>
        {authorized &&
          <Layout>
            <Component {...pageProps} />
          </Layout>
        }
    </SessionProvider>
  )
}

export default appWithTranslation(App)