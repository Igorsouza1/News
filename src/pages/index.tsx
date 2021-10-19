import  Head  from 'next/head'
import { SubscriberButton } from '../components/SubscriberButton'

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
    <Head>
        <title>Home</title>
    </Head>
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏 Hey, Welcome</span>
        <h1>News about the <span>React</span> World.</h1>
        <p>
          Get acess to all the publications <br />
          <span>for $9.90 month</span>
        </p>
        <SubscriberButton />
      </section>

      <img src="/images/avatar.svg" alt="girl coding" />
    </main>
    </> 
  )
}
