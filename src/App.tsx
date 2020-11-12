import React from 'react'
import './App.css'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Breadcrumb from './components/breadcrumb/index'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Blog from './pages/Blog'

const routes = [
	{ to: '/', label: 'Home' },
	{ to: '/dashboard', label: 'Dashboard' },
	{ to: '/contact', label: 'Contact' },
	{ to: '/about', label: 'About' },
	{ to: '/blog', label: 'Blog' },
]
function App() {
	return (
		<div className="App">
			<Router>
				<Breadcrumb>
					{routes.map(({ to, label }) => (<Link key={to} to={to}>{label}</Link>))}
				</Breadcrumb>
				<Route component={Home} path="/" exact />
				<Route component={Dashboard} path="/dashboard" />
				<Route component={Contact} path="/contact" />
				<Route component={About} path="/about" />
				<Route component={Blog} path="/blog" />
			</Router>
			
		</div>
	)
}

export default App
