import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Background from "../components/Background";
import Nav from "../components/Nav";
import Banner from '../components/Banner';

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <Banner />
    </>
  )
}
