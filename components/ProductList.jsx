import React from 'react'
import Image from 'next/image'
import styles from '../styles/ProductList.module.css'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div className={styles.container}>
     <h1 className={styles.title}> Best Place to Give Something Tastier To Your Taste Buds!</h1>
     <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptas laborum maxime soluta aliquid magnam deleniti. Quaerat cumque doloremque odit nihil id? Fuga, dolor id! Corporis commodi perspiciatis impedit cupiditate illum enim est. Corrupti nisi nostrum perferendis labore vero consequuntur!</p>
     <div className={styles.wrapper}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
     </div>
        </div>
  )
}

export default ProductList