import React from 'react'
import styles from '../styles/ProductCard.module.css'
import Image from 'next/image'

const ProductCard = () => {
  return (
    <div className={styles.container}>
        <Image src='/img/pizza.png' width='500' height='500' />
        <h2 className={styles.title}>Cheese N Corn Pizza</h2>
        <span className={styles.price}>Rs. 220/-</span>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolor adipisci iure laudantium necessitatibus ipsum? </p>

    </div>
  )
}

export default ProductCard