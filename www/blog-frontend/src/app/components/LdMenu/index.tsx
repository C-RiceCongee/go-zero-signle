// To inform next js, this is a client component 
"use client";
import { useEffect, useState } from "react";
import { LdMenuItem } from "./types";
import CollapseMenu from "./components/CollapseMenu"
const LdMenu = () => {
    const [menuList, setMenuList] = useState<Array<LdMenuItem>>([])
    useEffect(() => {
        let timer = setTimeout(() => {
            setMenuList([
                {
                    "id": 1,
                    "parent_menu_id": 0,
                    "menu_icon": "fas fa-home",
                    "menu_name": "村头",
                    "menu_sort": 1,
                    "menu_target": "_self",
                    "menu_url": "/"
                },
                {
                    "id": 2,
                    "parent_menu_id": 0,
                    "menu_icon": "fas fa-newspaper",
                    "menu_name": "文章",
                    "menu_sort": 2,
                    "menu_target": "_blank",
                    "menu_url": "/articles"
                },
                {
                    "id": 3,
                    "parent_menu_id": 2,
                    "menu_icon": "fas fa-file-alt",
                    "menu_name": "相册",
                    "menu_sort": 1,
                    "menu_target": "_self",
                    "menu_url": "/articles/new"
                },
                {
                    "id": 4,
                    "parent_menu_id": 0,
                    "menu_icon": "fas fa-users",
                    "menu_name": "影音集",
                    "menu_sort": 3,
                    "menu_target": "_self",
                    "menu_url": "/community"
                },
                {
                    "id": 5,
                    "parent_menu_id": 4,
                    "menu_icon": "fas fa-comments",
                    "menu_name": "留言区",
                    "menu_sort": 1,
                    "menu_target": "_self",
                    "menu_url": "/community/discussions"
                },
            ])
        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    }, [])
    const themes = ['skin-dark', 'skin-red']
    const changeTheme = () => {
        const random = Math.random() > 0.5 ? 1 : 0
        const body = document.body;
        themes.forEach(e => {
            body.classList.remove(e)
        })
        body.classList.add(themes[random])
    }
    return <div className="LdMenu">
        <header className="pc-menu pt-5 pb-5 pl-5 pr-5 transition-all duration-1000 hidden md:flex justify-between bg-skin-bg text-skin-content">
            <div className="logo font-bold">LD-村望老弟</div>
            <div className="menuContainer flex">
                {
                    menuList.map(v => {
                        return <div className="menuItem flex-nowrap ml-5" key={v.id}>
                            {v.menu_name}
                        </div>
                    })
                }
            </div>
            <div className="action" onClick={changeTheme}>
                Theme
            </div>
        </header>
        <header className="mobile-menu md:hidden flex justify-between pt-5 pb-5 pl-5 pr-5 transition-all duration-1000  bg-skin-bg text-skin-content">
            <div className="logo">LD-村望老弟</div>
            <CollapseMenu list={menuList}></CollapseMenu>
        </header>
    </div >
}
export default LdMenu;