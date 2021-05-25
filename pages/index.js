import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Looking for a car fit for a superhero? You have come to the right place! Our site only features cars with unusual capabilities, that help you in the fight against evil.</p>
      </section>
    </Layout>
  )
}
