import React from 'react'

import logo from '../../assets/images/logo.png'
import igLogo from '../../assets/images/ig.svg'
import tgLogo from '../../assets/images/tg.svg'

import styles from './styles.module.scss'

import { Link } from 'react-router-dom'
import ROUTES from 'src/utils/routes'

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.footerLogo}>
                <Link to={ROUTES.HOME}>
                    <img src={logo} alt='main-logo' />
                </Link>
            </div>
            <span className={styles.footerAllRightsReserved}>
                All rights reserved®
            </span>
            <div className={styles.footerSocialMedia}>
                <div className={styles.instagram}>
                    <Link 
                        to='https://www.instagram.com/dima_kapkan?igsh=NTc4MTIwNjQ2YQ=='
                        target='_blank'
                        rel='noreferrer'>
                        <img src={igLogo} alt="ig-logo" />
                    </Link>
                </div>
                <div className={styles.telegram}>
                    <Link 
                        to='https://t.me/lantanaxxx'
                        target='_blank'
                        rel='noreferrer'>
                        <img src={tgLogo} alt="tg-logo" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Footer
