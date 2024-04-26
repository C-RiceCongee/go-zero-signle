// To inform next js, this is a client component 
"use client";
import { useEffect, useState } from "react";
import { LdMenuItem } from "./types";

const LdMenu = () => {
    const [menuList, setMenuList] = useState<Array<LdMenuItem>>([])
    useEffect(() => {
        let timer = setTimeout(() => {
            setMenuList([
                {
                    "id": 1,
                    "parent_menu_id": 0,
                    "menu_icon": "fas fa-home",
                    "menu_name": "首页",
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
                    "menu_name": "撰写新文章",
                    "menu_sort": 1,
                    "menu_target": "_self",
                    "menu_url": "/articles/new"
                },
                {
                    "id": 4,
                    "parent_menu_id": 0,
                    "menu_icon": "fas fa-users",
                    "menu_name": "社区",
                    "menu_sort": 3,
                    "menu_target": "_self",
                    "menu_url": "/community"
                },
                {
                    "id": 5,
                    "parent_menu_id": 4,
                    "menu_icon": "fas fa-comments",
                    "menu_name": "讨论区",
                    "menu_sort": 1,
                    "menu_target": "_self",
                    "menu_url": "/community/discussions"
                },
                {
                    "id": 6,
                    "parent_menu_id": 4,
                    "menu_icon": "fas fa-user-friends",
                    "menu_name": "成员列表",
                    "menu_sort": 2,
                    "menu_target": "_self",
                    "menu_url": "/community/members"
                }
            ])
        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    }, [])
    return <div className="LdMenu">
        <div className="pc-menu hidden sm:flex">
            {
                menuList.map(v => {
                    return <div className="menuItem" key={v.id}>
                        {v.menu_name}
                    </div>
                })
            }
        </div>
        <div className="mobile-menu sm:hidden">Mobile</div>
    </div >
}
export default LdMenu;