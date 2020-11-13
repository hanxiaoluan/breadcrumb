import { useState } from 'react'

export const useBreadcrumb  = () => {
	const [ expanded, setExpanded ] = useState(false)
	const open = () => setExpanded(true)
    
	return {
		expanded,
		open
	}
}
