import React from 'react'

const About: React.FC = ({ children }) => {
	return (
		<div>
			<h2>About</h2>
			<div>{children}</div>
		</div>
	)
}

export default About