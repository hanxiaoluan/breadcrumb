import React from 'react'

const Blog: React.FC = ({ children }) => {
	return (
		<div>
			<h2>Blog</h2>
			<div>{children}</div>
		</div>
	)
}

export default Blog