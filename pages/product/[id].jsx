import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../../styles/Product.module.css'

const Product = () => {
  const [size, setSize] = useState(0)
  const product = {
    id: 1,
    img: '/img/pizza.png',
    name: 'Cheese N Corn Pizza',
    price: [220, 300, 380],
    desc: 'This pizza is a perfect blend of base merinated in cheese sauce and topped with corn and mouth watering mozerilla grilled with love and care'
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
        <Image src={product.img} alt='' layout='fill' objectFit='contain' />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.name}>{product.name}</h1>
        <span className={styles.price}>Rs. {product.price[size]} /-</span>
        <p className={styles.desc}>{product.desc}</p>
        <h4 className={styles.chooseSize}> Select Your Pizza Size</h4>
        <div className={styles.sizes}>
        <div className={styles.size} onClick={()=> setSize(0)}>
          <Image src='/img/size.png' layout='fill' alt='' objectFit='contain' />
          <span className={styles.sizeNumber} >Small</span>        </div>
        <div className={styles.size} onClick={()=> setSize(1)}>
           <Image src='/img/size.png' layout='fill' alt='' objectFit='contain' />
          <span className={styles.sizeNumber} >Medium</span>
        </div>
        <div className={styles.size} onClick={()=> setSize(2)}>
           <Image src='/img/size.png' layout='fill' alt='' objectFit='contain' />
          <span className={styles.sizeNumber} >Large</span>
        </div>
        </div>
          <h4 className={styles.cheeseTitle}>Make it Cheesy</h4>
        <div className={styles.cheese}>
          <div className={styles.option}>
            <input type="checkbox" id='cheeseM' name='cheeseM' className={styles.checkbox}/>
            <label htmlFor="cheeseM">Cheese [Medium]</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id='cheeseL' name='cheeseL' className={styles.checkbox}/>
            <label htmlFor="cheeseL">Cheese [Large]</label>
          </div>
        </div>

        <h4 className={styles.toppingsTitle}>Extra Toppings</h4>
        <div className={styles.toppings}>
          <div className={styles.optionT}>
            <input type="checkbox" id='onion' name='onion' className={styles.checkbox}/>
            <label htmlFor="onion">onion</label>
          </div>
          <div className={styles.optionT}>
            <input type="checkbox" id='capsicum' name='capsicum' className={styles.checkbox}/>
            <label htmlFor="capsicum">Capsicum</label>
          </div>
          <div className={styles.optionT}>
            <input type="checkbox" id='tomato' name='tomato' className={styles.checkbox}/>
            <label htmlFor="tomato">Tomato</label>
          </div>
          <div className={styles.optionT}>
            <input type="checkbox" id='blackOlives' name='blackOlives' className={styles.checkbox}/>
            <label htmlFor="blackOlives">Black Olives</label>
          </div>
          <div className={styles.optionT}>
            <input type="checkbox" id='mushrooms' name='mushrooms' className={styles.checkbox}/>
            <label htmlFor="mushrooms">Mushrooms</label>
          </div>
          <div className={styles.optionT}>
            <input type="checkbox" id='jalapeno' name='jalapeno' className={styles.checkbox}/>
            <label htmlFor="jalapeno">Jalapeno</label>
          </div>
          <div className={styles.optionT}>
            <input type="checkbox" id='paneer' name='paneer' className={styles.checkbox}/>
            <label htmlFor="paneer">Paneer</label>
          </div>
          <div className={styles.optionT}>
            <input type="checkbox" id='sweetCorn' name='sweetCorn' className={styles.checkbox}/>
            <label htmlFor="sweetCorn">Sweet Corn</label>
          </div>
          <div className={styles.optionT}>
            <input type="checkbox" id='redPaprika' name='redPaprika' className={styles.checkbox}/>
            <label htmlFor="redPaprika">Red Paprika</label>
          </div>
          <div className={styles.optionT}>
            <input type="checkbox" id='babyCorn' name='babyCorn' className={styles.checkbox}/>
            <label htmlFor="babyCorn">Baby Corn</label>
          </div>
          <div className={styles.optionT}>
            <input type="checkbox" id='chicken' name='chicken' className={styles.checkbox}/>
            <label htmlFor="chicken">Chicken</label>
          </div>
          <div className={styles.optionT}>
            <input type="checkbox" id='chickenSalami' name='chickenSalami' className={styles.checkbox}/>
            <label htmlFor="chickenSalami">Chicken Salami</label>
          </div>
        </div>
        <div className={styles.quantityContainer}>
          <input type="number" defaultValue={1} className={styles.quantity}/>
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>

    </div>
  )
}

export default Product