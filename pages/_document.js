import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="manifest" href="/manifest.json" />
        {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" /> */}
        <meta name="theme-color" content="#fff" />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script> */}
      </body>
    </Html>
  )
}
