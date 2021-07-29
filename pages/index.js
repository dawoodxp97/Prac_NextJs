import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>SkdList | Home </title>
      <meta name="keywords" content="skds"/>
    </Head>
   <div>
     <h1 className={styles.title}>Homepage</h1>
     <p className={styles.text}>Lorem Ispsumne elileie elheliheoie elaijwpiw fnfheioe alwoihwfoh aliwjdpojf wiqoj</p>
     <Link href="/skds">
     <a className={styles.btn}>See Skd Listing</a>
     </Link>
   </div>
   </>
  )
}
