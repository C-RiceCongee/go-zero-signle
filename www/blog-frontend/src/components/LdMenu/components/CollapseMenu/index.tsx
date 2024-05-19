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
			<div className='bars' onClick={() => setOpen(!open)}>
				<span
					className={`transition-all duration-10 bg-skin-menu-content bread1 w-10 h-1 mt-1 mb-1 block  ${open && 'rotate-45  -translate-x-2 translate-y-2'
						}`}
				></span>
				<span
					className={`transition-all duration-10 bg-skin-menu-content bread1 w-10 h-1 mt-1 mb-1 block  ${open && 'opacity-0'
						}`}
				></span>
				<span
					className={`transition-all duration-10 bg-skin-menu-content bread1 w-10 h-1 mt-1 mb-1 block  ${open && `-rotate-45 -translate-x-2 -translate-y-2`
						}`}
				></span>
			</div>

			<div
				className={`fullScreeMenu  rounded-b-lg transition-top duration-75  w-full  bg-skin-menu-bg left-0  fixed  ${open ? `top-16  backdrop-blur-xl` : `-top-[2000px] opacity-0`
					}`}
			>
				{list.map(v => {
					return (
						<Link
							target={v.menu_target}
							href={v.menu_url}
							key={v.id}
							className='menuItem  text-skin-menu-content   cursor-pointer text-center block m-5 p-3 box-border'
						>
							{v.menu_name}
						</Link>
					)
				})}
				<div className='text-center m-5 p-3 box-border' onClick={changeTheme}>
					Theme
				</div>
			</div>
		</div>
	)
}

export default CollapseMenu
