import React from 'react'

const Dashboard: React.FC = ({ children }) => {
	return (
		<div>
			<h2>Dashboard</h2>
			<div>{children}</div>
		</div>
	)
}

export default Dashboard