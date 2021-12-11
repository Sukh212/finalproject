import '../styles/globals.scss'
import Router from 'next/router'
import Layout from '../components/Layout'
import { useState } from 'react'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on('routeChangeStart', () => setLoading(true))
  Router.events.on('routeChangeComplete', () => setLoading(false))
  const Loader = () => <div className='height-24'>
    <button class="btn btn-sm btn-outline btn-primary loading text-2xl py-32 lg:py-64 border-none w-full">Loading.....</button>
  </div>
  const { seo } = Component

  return <>
    <NextSeo
      title={seo?.title ? seo?.title : 'Explore Patiala'}
      description={seo?.description ? seo?.description : 'Explore the royal city Patiala'}
      canonical={seo?.canonical ? seo?.canonical : ''}
      openGraph={{
        url: seo?.url ? seo?.url : 'https://www.patiala.com',
        title: seo?.title ? seo?.title : 'Explore Patiala',
        description: seo?.description ? seo?.description : 'Explore the royal city Patiala',
        images: seo?.images ? seo?.images : [],
        site_name: 'Explore Patiala',
      }}
    />
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/metadata/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/metadata/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/metadata/favicon-16x16.png" />
      <link rel="manifest" href="/metadata/site.webmanifest" />
    </Head>
    <Layout>
      {loading ? <Loader /> : <Component {...pageProps} seo={Component.seo} />}
    </Layout>
  </>
}

export default MyApp
