import React from 'react'

import AppRoutes from './Routes/Routes'
import Header from '../Header'
// import Footer from '../Footer'
import Sidebar from '../../components/Sidebar/index'
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

			{/* <Footer /> */}
		</MainLayout>

	)
}

export default App
