import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './components/App'
import { BrowserRouter } from 'react-router-dom'

import './assets/styles/app.global.scss'

const rootElem = document.getElementById('root')

if (rootElem) {
	const root = ReactDOM.createRoot(rootElem);

	root.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
}