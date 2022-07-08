import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../styles/Slider.module.css'

const Slider = () => {
  const [index, setIndex] = useState(0)
  const images = [
    "/img/pizza.png", "/img/delivered.png", "/img/checked.png" 
  ]

  const handleArrow = (direction) => {
    if(direction==='l'){
      setIndex(index!==0 ? index-1 : 2)
    }
    else{
      setIndex(index!==2 ? index+1 : 0)
    }
  }
  console.log(index)
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} onClick={()=> handleArrow('l')}>

      <Image src="/img/arrowL.png" layout='fill' objectFit='contain'/>
      </div>
        <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
         {images.map((img,i)=>(
           <div className={styles.imgContainer} key={i}>

      <Image src={img} layout='fill' objectFit='contain'/>
          </div>
         ))}
     

        </div>
         <div className={styles.arrowContainer} onClick={()=> handleArrow('r')}>

      <Image src="/img/arrowR.png" layout='fill' objectFit='contain'/>
      </div>
    </div>
  )
}

export default Slider