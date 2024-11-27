import React from 'react'

import AppRoutes from './Routes/Routes'
import Header from '../Header'
import Footer from '../Footer/index'
import Sidebar from '../../components/Sidebar/index'
import NewYearSale from '../../components/Sale/index'
// import Home from '../Home'
import MainLayout from '../Layouts/MainLayout'
import Ads from '../Ads/index'

import styles from './styles.module.scss'

const App = () => {
	return (
		<MainLayout>
			<Header />
			<div className={styles.container}>
				<Sidebar />
				<Ads />
				<AppRoutes />
			</div>
			<NewYearSale />

			<Footer />
		</MainLayout>

	)
}

export default App
