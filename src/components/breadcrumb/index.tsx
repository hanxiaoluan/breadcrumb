import React from 'react'
import { useBreadcrumb } from '../useBreadcrumb'
import Collapser from '../Collapser'
interface BreadcrumbProps {
	separator?: React.ReactNode
	collapse?: {
		itemsBefore: number
		itemsAfter: number
		max: number
	}
}
const BreadcrumbSeparator: React.FC = ({ children, ...restProps }) => (
	<li className="breadcrumb-separator" {...restProps}>
		{children}
	</li>
)
const BreadcrumbItem: React.FC = ({ children }) => (
	<li className="breadcrumb-item">
		{children}
	</li>
)
const Breadcrumb: React.FC<BreadcrumbProps> = ({ separator = '/', children, collapse = {}, ...restProps }) => {
	const { expanded, open } = useBreadcrumb()

	// 对children进行处理
	let _children = React.Children.toArray(children)
	_children = _children.map((child, index) => (
		<BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
	))

	// 判断是否是最后一个来决定是否添加分隔符
	const lastIndex = _children.length - 1
	_children = (_children.reduce((pre, cur, index) => {
		const notLast = index < lastIndex
		if (notLast) {
			(pre as React.ReactNodeArray).push(cur, <BreadcrumbSeparator key={`breadcrumb_sep${index}`}>{separator}</BreadcrumbSeparator>)
		} else {
			(pre as React.ReactNodeArray).push(cur)
		}
		return pre
	}, [])) as any
	return (
		<ol {...restProps}>
			{_children}
		</ol>
	)
}

export default Breadcrumb