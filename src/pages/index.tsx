import React from 'react';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { CountDown } from '../components/CountDown';
import { ExpirenceBar } from '../components/ExpirenceBar'
import { Profile } from '../components/Profile'

import Head from 'next/head';

import styles  from '../styles/pages/Home.module.css';
import { ChallengeBox } from '../components/ChallengeBox';

export default function Home() {
  
  return (
    
    <div className={ styles.container }>
    
      <Head>
        <title> Inicio | move.it </title>
      </Head>

      <ExpirenceBar />
    
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </div>

        <div>
          <ChallengeBox />
        </div>
      </section>

    </div>
  )

}

