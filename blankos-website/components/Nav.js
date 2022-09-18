import React from 'react';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';

const Nav = () => {

  return (
    <div className={styles.nav}>
        <div className={styles.homeBtn}>
            <Link href='/'>Home</Link>
        </div>
        <div className={styles.otherPages}>
            <Link href='/calendar/'>Calendar</Link>
            <Link href='/events/'>Events</Link>
            <Link href='/calculator'>Calculator</Link>
        </div>
    </div>
  );
};

export default Nav;