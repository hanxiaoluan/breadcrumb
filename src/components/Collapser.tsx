import React from 'react'
import { MoreHoriz } from '@material-ui/icons'

interface CollapserProps {
    title: string
    onClick: (e: React.MouseEvent)=> void
}
const Collapser: React.FC<CollapserProps> = (props) => {
	return (
		<li className='breadcrumb-collapser' {...props}>
			<MoreHoriz />
		</li>
	)
}

export  default Collapser