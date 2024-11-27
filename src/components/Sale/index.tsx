import React from 'react'

import styles from './styles.module.scss'

import santaSale from '../../assets/images/santa.svg'
import sneakers from '../../assets/images/sneakers.svg'
import psp from '../../assets/images/psp.svg'



const NewYearSale = () => {
    return (
        <div className={styles.saleWrapper}>
            <div className={styles.newYearSale}>
                <div className={styles.textNewYearSale}>
                    <div className={styles.newYear}>NEW YEAR</div>
                    <div className={styles.sale}>SALE</div>
                </div>
                <button className={styles.seeMoreButton}>See more</button>
                <img
                    className={styles.sneakersImg}
                    src={sneakers}
                    alt='sneakers-image'
                />
                <img
                    className={styles.pspImg}
                    src={psp}
                    alt='psp-image'
                />
            </div>
            <div className={styles.saveMoney}>
                {/* <img
                    className={styles.santaSale}
                    src={santaSale}
                    alt='sale-man'
                /> */}
                <div className={styles.text}>Save up to <span className={styles.fifty}>50%</span> off</div>
            </div>

        </div>
    )
}

export default NewYearSale
