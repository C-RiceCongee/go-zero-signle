import { useState } from "react";
import { LdMenuItem } from "../../types";
interface ICollapseMenuProps {
    list: Array<LdMenuItem>
    changeTheme: () => void
}
const CollapseMenu: React.FC<ICollapseMenuProps> = (props) => {
    const { list, changeTheme } = props
    const [open, setOpen] = useState<Boolean>(false)
    return <div className="collapseMenu rounded-b-lg  bg-skin-menu-bg text-skin-menu-content">
        <div className="bars" onClick={() => setOpen(!open)}>
            <span className={`transition-all duration-10 bg-skin-menu-content bread1 w-10 h-1 mt-1 mb-1 block  ${open && 'rotate-45  -translate-x-2 translate-y-2'}`}></span>
            <span className={`transition-all duration-10 bg-skin-menu-content bread1 w-10 h-1 mt-1 mb-1 block  ${open && 'opacity-0'}`}></span>
            <span className={`transition-all duration-10 bg-skin-menu-content bread1 w-10 h-1 mt-1 mb-1 block  ${open && `-rotate-45 -translate-x-2 -translate-y-2`}`}></span>
        </div>

        <div className={`fullScreeMenu rounded-b-lg duration-500 transition-top w-full  bg-skin-menu-bg duration-10 left-0  absolute  ${open ? `top-16` : `-top-[2000px]`}`}>
            {
                list.map(v => {
                    return <div key={v.id} className="menuItem text-center m-5 p-3 box-border">{v.menu_name}</div>
                })
            }
            <div className="Theme  text-center m-5 p-3 box-border" onClick={changeTheme}>Theme</div>
        </div>
    </div>
}

export default CollapseMenu;