import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../utils/routes'

import styles from './styles.module.scss'

import LOGO from '../../assets/images/logo.png'
import Avatar from '../../assets/images/avatar.svg'
import Lupa from '../../assets/images/lupa.svg'
import Favorite from '../../assets/images/favorite.svg'
import Cart from '../../assets/images/cart.svg'

const Header = () => {
	return (
		<header className={styles.header}>
			<Link to='/' className={styles.logo}>
				<img src={LOGO} alt="Tapo4ki-logo" />
			</Link>

			<div className={styles.info}>
				<div className={styles.user}>
					<img className={styles.guestPic} src={Avatar} alt="avatar-image" />
					<div className={styles.username}>Guest</div>
				</div>

				<form className={styles.form}>
					<div className={styles.inputWrapper}>
						<div className={styles.input}>
							<img
								className={styles.loupe}
								src={Lupa}
								alt='loupe-image'
							/>
							<input
								type='search'
								name='search'
								placeholder='Search for anything!'
								autoComplete='off'
								onChange={() => { }}
								value='' />
						</div>
					</div>
				</form>
				<div className={styles.cartWrapper}>
					<div className={styles.favorite}>
						<img src={Favorite} alt="favorite-img" />
					</div>
					<div className={styles.cart}>
						<img src={Cart} alt="cart-img" />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
