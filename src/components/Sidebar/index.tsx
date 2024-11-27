import React from 'react'

import styles from './styles.module.scss'

const Sidebar = () => {
    return (
        <div className={styles.sidebarWrapper}>
            <div className={styles.categories}>
                <h1>CATEGORIES</h1>
                <a href='/' >Computers</a>
                <a href='/' >Clothes</a>
                <a href='/' >Shoes</a>
                <a href='/' >Furniture</a>
                <a href='/' >Cosmetics</a>
                <a href='/' >Travel</a>
                <a href='/' >Automotive</a>
            </div>
            <div className={styles.helpFooter}>
                <a href='/'>Help</a>
                <a href='/' className={styles.terms}>Terms & Conditions</a>
            </div>
        </div>
    )
}

export default Sidebar
