import React from 'react'

import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <nav className={styles.sidebarCategories}>
                <h1>CATEGORIES</h1>
                <Link to='/'>Computers</Link>
                <Link to='/'>Clothes</Link>
                <Link to='/'>Shoes</Link>
                <Link to='/'>Furniture</Link>
                <Link to='/'>Cosmetics</Link>
                <Link to='/'>Travel</Link>
                <Link to='/'>Automotive</Link>
            </nav>
            <div className={styles.sidebarHelpTerms}>
                <Link to='/'>Help</Link>
                <Link to='/' className={styles.terms}>Terms & Conditions</Link>
            </div>
        </div>
    )
}

export default Sidebar
