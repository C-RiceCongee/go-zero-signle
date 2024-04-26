import { useState } from "react";
import { LdMenuItem } from "../../types";
interface ICollapseMenuProps {
    list: Array<LdMenuItem>
}
const CollapseMenu: React.FC<ICollapseMenuProps> = (props) => {
    const { list } = props
    const [open, setOpen] = useState<Boolean>(false)
    return <div className="collapseMenu">
        <div className="bars" onClick={() => setOpen(!open)}>
            <span className={`transition-all duration-100 bread1 w-10 h-1 mt-1 mb-1 block bg-skin-content ${open && 'rotate-45  -translate-x-2 translate-y-2'}`}></span>
            <span className={`transition-all duration-100 bread1 w-10 h-1 mt-1 mb-1 block bg-skin-content ${open && 'opacity-0'}`}></span>
            <span className={`transition-all duration-100 bread1 w-10 h-1 mt-1 mb-1 block bg-skin-content ${open && `-rotate-45 -translate-x-2 -translate-y-2`}`}></span>
        </div>

        <div className={`fullScreeMenu transition-all duration-100  absolute left-0  bg-skin-bg text-skin-content ${open ? `w-full` : `w-0 h-0 opacity-0`}`}>
            {
                list.map(v => {
                    return <div key={v.id} className="menuItem text-center m-10 p-3 box-border">{v.menu_name}</div>
                })
            }
        </div>
    </div>
}

export default CollapseMenu;