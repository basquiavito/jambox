import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Austin Rivers'
export const siteTitle = 'Hooper Os'

export default function Layout({ children, home }) {
  return (
<>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="The Hottest basketball Spot in the"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
        />
      </Head>
     
      <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <>
           
           
          </>
        ) : (
          <>
           
 
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/blogs">
            <a>← Back </a>
          </Link>
        </div>
      )}
    </div>
    </>
  )
}