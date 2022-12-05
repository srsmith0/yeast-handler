import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Yeast Gaucho</title>
        <meta name="Yeast Gaucho" content="Yeast management in one place" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Yeast Gaucho
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