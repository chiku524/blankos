import React, { useState, useEffect } from 'react';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';

const Nav = () => {
  const [size, setSize]  = useState('big');

  function myFunction(x) {
    if (x.matches) { // If media query matches
      setSize('small');
    } else {
      setSize('big');
    }
  }
  
  useEffect(() => {
    var x = window.matchMedia("(max-width: 700px)");

    myFunction(x);
    x.addEventListener("test", myFunction);
  }, [])

  return (
    <>
    {size === "big" ? (<div className={styles.navContainer}><div className={styles.nav}>
        <div className={styles.homeBtn}>
            <Link href='/'>Home</Link>
        </div>
        <div className={styles.otherPages}>
            <Link href='/calendar/'>Calendar</Link>
            <Link href='/events/'>Events</Link>
            <Link href='/calculator'>Calculator</Link>
        </div>
    </div></div>) : 
    <div className={styles.nav}>
        <div className={styles.homeBtn}>
            <Link href='/'>Home</Link>
        </div>
        <div className={styles.otherPages}>
            <Link href='/calendar/'>Calendar</Link>
            <Link href='/events/'>Events</Link>
            <Link href='/calculator'>Calculator</Link>
        </div>
    </div>}
    </>
  );
};

export default Nav;