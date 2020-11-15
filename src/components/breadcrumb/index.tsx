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

const withSeparator = (lastIndex: any, separator: React.ReactNode) => (cur: any, pre: any, index: any) => {
	const notLast = index < lastIndex
	if (notLast) {
		cur.push(pre, <BreadcrumbSeparator key={`breadcrumb_sep${index}`}>{separator}</BreadcrumbSeparator>)
	} else {
		cur.push(pre)
	}
	return cur
}
const withCollapse = ({
	itemsBefore, itemsAfter, max, _children, totalItems, open
}: {
	itemsBefore: number
	itemsAfter: number
	max: number
	_children: any
	totalItems: number
	open: ()=> void
}) => [
	..._children.slice(0, itemsBefore), <Collapser title='Expand' key='collapsed-seperator' onClick={open} />,
	..._children.slice(totalItems - itemsAfter, totalItems)
]
const BreadcrumbItem: React.FC = ({ children }) => (
	<li className="breadcrumb-item">
		{children}
	</li>
)
const Breadcrumb: React.FC<BreadcrumbProps> = ({ separator = '/', children, collapse = {}, ...restProps }) => {
	const { itemsBefore = 1, itemsAfter = 1, max = 4 } = collapse
	const { expanded, open } = useBreadcrumb()

	// 对children进行处理
	// 判断是否是最后一个来决定是否添加分隔符
	let _children = React.Children.toArray(children)
	const lastIndex = _children.length - 1
	_children = _children.map((child, index) => (
		<BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
	))
		.reduce(withSeparator(lastIndex, separator), [])


	


	// 通过collapse属性来判断是否是可展开的
	const totalItems = _children.length

	if (!expanded || totalItems <= max) {
		_children = withCollapse({
			itemsBefore,
			itemsAfter,
			totalItems,
			max,
			_children,
			open
		})
	}
	return (
		<ol {...restProps}>
			{_children}
		</ol>
	)
}

export default Breadcrumb