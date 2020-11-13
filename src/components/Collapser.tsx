import React from 'react'
import { MoreHoriz } from '@material-ui/icons'

const Collapser: React.FC = () => {
	return (
		<li className='breadcrumb-collapser'>
			<MoreHoriz />
		</li>
	)
}

export  default Collapser