import React from 'react'

import styles from './styles.module.scss'

import nikeSneakers from '../../assets/images/zoomX.svg'

const ProductCard = () => {
    
    return (
    <div className={styles.item}>
            <img src={nikeSneakers} alt="item-img" />
            <div className={styles.itemInfo}>
                <div className={styles.itemName}>
                    <span className={styles.title}>Nike ZoomX 2023</span>
                    <span className={styles.type}>Sneakers</span>
                </div>
                <div className={styles.itemDescription}>
                    <div className={styles.price}>
                        <span className={styles.salePrice}>79$</span>
                        <span className={styles.defaultPrice}>99$</span>
                    </div>
                    <span className={styles.purchaseNumber}>19 people purchased</span>
                </div>
            </div>
        </div>
    )
}

const Trending = () => {

  return (
    <div className={styles.trendingWrapper}>
        <span className={styles.trendingText}>Trending</span>
        <div className={styles.itemsList}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
        <button className={styles.trendingButton}>See more</button>
      
    </div>
  )
}

export default Trending
