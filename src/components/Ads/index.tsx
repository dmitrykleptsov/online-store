import React from 'react'
import PC from '../../assets/images/pc.svg'

import styles from './styles.module.scss'

const Ads = () => {
	return (
		<div className={styles.adsWrapper}>
			<div className={styles.bigSale}>BIG SALE 20%</div>
			<div className={styles.bestsellerWrapper}>
				<div className={styles.bestseller}>THE BESTSELLER OF 2024</div>
				<div className={styles.pcName}>LENNON R2D2 <br /> WITH NVIDIA 5090 TI</div>
				<button className={styles.shopNowButton}>Shop Now</button>
			</div>
			<img
				className={styles.pcImage}
				src={PC}
				alt="PC-image" />
		</div>
	)
}

export default Ads
