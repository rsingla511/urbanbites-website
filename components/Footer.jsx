import Image from 'next/image'
import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src='/img/pizza.png' layout='fill' objectFit='contain' alt=''/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.moto}>WE WANT TO BE THE FIRST & LAST FAVOURITE TASTE OF FOOD LOVERS.</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUT OUR OUTLET </h1>
          <p className={styles.text}>
            Khaira Plaza
            <br /> Street No. 1
            <br /> Gobind Colony 
            <br /><br /> KC Road, Barnala
            <br /> Punjab (148101) </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>OUR TIMINGS </h1>
          <p className={styles.text}>
            Monday to Friday
            <br /> 10:00 am - 11:00 pm
          </p>
          <p className={styles.text}>
            Saturday & Sunday
            <br /> 10:00 am - 10:00 pm
          </p>
        </div>
        </div>

      </div>
    
  )
}

export default Footer