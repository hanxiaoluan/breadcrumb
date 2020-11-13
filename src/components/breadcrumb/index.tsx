import React from 'react'
import { useBreadcrumb } from '../useBreadcrumb'
import Collapser from '../Collapser'
interface BreadcrumbProps {
	separator?: React.ReactNode
	collapse?: {
		itemsBefore?: number
		itemsAfter?: number
		max?: number
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
	const { itemsBefore = 1, itemsAfter = 1, max = 4 } = collapse
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


	// 通过collapse属性来判断是否是可展开的
	const totalItems = _children.length

	if (!expanded || totalItems <= max) {
		_children = [
			..._children.slice(0, itemsBefore),
			<Collapser title="Expand" onClick={open} key='collapsed-seperator'></Collapser>,
			..._children.slice(totalItems - itemsAfter, totalItems)
		]
	}
	console.log(expanded, _children)
	return (
		<ol {...restProps}>
			{_children}
		</ol>
	)
}

export default Breadcrumb