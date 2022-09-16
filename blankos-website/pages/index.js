import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Home() {

  const [value, onChange] = useState(new Date())
  return (
    <div className={styles.container}>
        <Calendar onChange={onChange} value={value} />
    </div>
  )
}
