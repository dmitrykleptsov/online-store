import React from 'react'
import styles from './styles.module.scss'

const MainLayout = ({ children }) => {
    return (
        <div className={styles.mainLayout}>
            <div className={styles.mainLayoutWrapper}>
                {children}
            </div>
        </div>
    )
}

export default MainLayout
