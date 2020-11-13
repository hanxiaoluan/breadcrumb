import { useState } from 'react'

export const useBreadcrumb  = () => {
	const [ expanded, setExpanded ] = useState(false)
	const open = () => {
		console.log(1)
		setExpanded(true)
	}
    
	return {
		expanded,
		open
	}
}
