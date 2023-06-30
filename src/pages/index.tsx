import Head from 'next/head'

import { useState } from 'react'

import { Plus_Jakarta_Sans } from 'next/font/google'

import Header from '@/components/Header'
import BannerHero from '@/components/BannerHero'
import VideoSection from '@/components/VideoSection'
import DemostracaoSection from '@/components/DemostracaoSection'
import Footer from '@/components/Footer'

const pjs = Plus_Jakarta_Sans({
  weight: ['300', '400', '500','600' ,'700' ,'800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {

  const [toogle, setToogle]= useState <boolean> (false)
    function toogleTheme() {
        setToogle ( toogle => !toogle )
    }

  return (
    <>
    <Head>
        <title>Webinars Exclusivos | Menos Conversinha, Mais Conversão</title>
        <meta name="description" content="Conheça as estrátegias que mudaram o jogo e como aplicá-las no seu negócio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
    </Head>
    <main className={ `${pjs.className } ${toogle? 'dark' : 'light'}`}>
      <Header theme={toogleTheme} />
      <BannerHero tag='Webinars Exclusivos' subTitulo='Menos Conversinha,' titulo='Mais Conversão' />
      <VideoSection />
      <DemostracaoSection />
      <Footer theme={toogleTheme}  />
    </main>
    </>
  )
}
