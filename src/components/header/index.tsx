"use client"

import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

export function Header() {
  const [top, setTop] = useState(true);

  function scrollHandler() {
    window.scrollY > 10 ? setTop(false) : setTop(true);
    // console.log("FEZ SCROLL");
  }

  useEffect( () => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);

  }, [top]);

  return (
    <header className={`${styles.header} ${!top? styles.fixed : styles.background}`}>

      <div className={styles.container}>

        <div className={styles.content}>
          
          <div className={styles.contentLogo}>
            <Link href="/">
              Dev Motors
            </Link>
          </div>

          <nav className={styles.nav}>
            <Link href="/">
              HOME
            </Link>

            <Link href="/#servicos">
              SERVIÇOS
            </Link>

            <Link href="/#contatos">
              CONTATOS
            </Link>
          </nav>

        </div>
      </div>
    </header>
  )
}