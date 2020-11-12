import React from 'react'
const Home: React.FC = ({ children }) => {
	return (
		<div>
			<h2>Home</h2>
			<div>{children}</div>
		</div>
	)
}

export default Home