import React from 'react'


const BreadcrumbItem: React.FC = ({ children }) => (
	<li className="breadcrumb-item">
		{children}
	</li>
)
const Breadcrumb: React.FC = ({ children }) => {
	let _children = React.Children.toArray(children)
	_children = _children.map((child, index) => (
		<BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
	))
	
	return (
		<ol>
			{_children}
		</ol>
	)
}

export default Breadcrumb