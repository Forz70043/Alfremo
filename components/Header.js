import Head from 'next/head'


export default function Header(props){
    let title = props.title ?? ''
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={title} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="keywords" content="Keywords" />
            <link rel="icon" href="/favicon.ico" />
            <meta charSet="utf-8" />
        </Head>
    )
}