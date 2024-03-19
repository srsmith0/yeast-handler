import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {useRouter} from 'next/router'

export default function Home() {
  const router = useRouter();

//TODO: add Supabase as the DB solution

  return (
    <div className={styles.container}>
      <Head>
        <title>Yeast Handler</title>
        <meta name="Yeast Handler" content="Yeast management in one place" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Howdy! <br /> Welcome to Yeast Handler
        </h1>
        <div>
          <br></br>
          <button onClick={() => router.push('/login')}>Login</button>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Created by Shawn Smith</p>
      </footer>
    </div>
  )
}