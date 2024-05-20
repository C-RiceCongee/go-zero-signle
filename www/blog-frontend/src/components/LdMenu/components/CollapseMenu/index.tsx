import { useState } from 'react'
import { LdMenuItem } from '../../types'
import Link from 'next/link'

interface ICollapseMenuProps {
	list: Array<LdMenuItem>
	changeTheme: () => void
}

const CollapseMenu: React.FC<ICollapseMenuProps> = props => {
	const { list, changeTheme } = props
	const [open, setOpen] = useState<Boolean>(false)
	return (
		<div className='collapseMenu text-skin-menu-content  shadow-2xl rounded-b-lg '>
			
		</div>
	)
}

export default CollapseMenu
