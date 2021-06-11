import clsx from 'clsx'
import React, { useState } from 'react'
import { CartIcon, Times } from '../../assets/icons'
import styles from './cartCounter.module.scss'

const CartCounter = ({ className, cartShow, onClick }) => {
  const [cartFromLs] = useState(JSON.parse(localStorage.getItem("cart")) || [])

  return (
    <>
      <div className={clsx(styles.cartCounterWrapper, className)} onClick={onClick}>
        <CartIcon />
        <span className={styles.cartCounter}>{cartFromLs.length}</span>
      </div>
      <div className={clsx(styles.cartSlide, cartShow ? styles.cartSlideOpen : null)}>
        <div className={styles.close}>
          <div className={styles.closeIcon} onClick={onClick}>
            <Times size={36} />
          </div>
        </div>
        <div className={styles.cartList}>
          {
            cartFromLs.map(v => (
              <div className={styles.cartCard}>
                <div className={styles.cartImg}>
                  <img src={v.cover} alt="" className="w-100" />
                </div>
                <div>
                  <p>{v.productName}</p>
                  <p>{v.price}</p>
                  <p>{v.qty}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default CartCounter
