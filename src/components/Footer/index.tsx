import React from 'react'

import logo from '../../assets/images/logo.png'
import igLogo from '../../assets/images/ig.svg'
import tgLogo from '../../assets/images/tg.svg'

import styles from './styles.module.scss'

import { Link } from 'react-router-dom'
import ROUTES from 'src/utils/routes'

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={logo} alt='main-logo' />
                </Link>
            </div>
            <div className={styles.allRightsReserved}>
                All rights reserved®
            </div>
            <div className={styles.socialMedia}>
                <div className={styles.instagram}>
                    <Link to='https://www.instagram.com/dima_kapkan?igsh=NTc4MTIwNjQ2YQ=='>
                        <img src={igLogo} alt="ig-logo" />
                    </Link>
                </div>
                <div className={styles.telegram}>
                    <Link to='https://t.me/lantanaxxx'>
                        <img src={tgLogo} alt="tg-logo" />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Footer
