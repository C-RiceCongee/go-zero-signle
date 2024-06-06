// To inform next js, this is a client component
"use client";
import { useEffect, useState } from "react";
import { LdMenuItem } from "./types";
import CollapseMenu from "./components/CollapseMenu";
import Link from "next/link";
const LdMenu = () => {
  const [open, setOpen] = useState(false);
  const [menuList, setMenuList] = useState<Array<LdMenuItem>>([
    {
      id: 1,
      parent_menu_id: 0,
      menu_icon: "fas fa-home",
      menu_name: "村头",
      menu_sort: 1,
      menu_target: "_self",
      menu_url: "/",
    },
    {
      id: 2,
      parent_menu_id: 0,
      menu_icon: "fas fa-newspaper",
      menu_name: "文章",
      menu_sort: 2,
      menu_target: "_self",
      menu_url: "/articles",
    },
    {
      id: 3,
      parent_menu_id: 2,
      menu_icon: "fas fa-file-alt",
      menu_name: "关于",
      menu_sort: 1,
      menu_target: "_self",
      menu_url: "/about",
    },
    // {
    // 	id: 4,
    // 	parent_menu_id: 0,
    // 	menu_icon: 'fas fa-users',
    // 	menu_name: '影音集',
    // 	menu_sort: 3,
    // 	menu_target: '_self',
    // 	menu_url: '/community',
    // },
    // {
    // 	id: 6,
    // 	parent_menu_id: 4,
    // 	menu_icon: 'fas fa-comments',
    // 	menu_name: '留言区',
    // 	menu_sort: 1,
    // 	menu_target: '_self',
    // 	menu_url: '/community/discussions',
    // },
    // {
    // 	id: 7,
    // 	parent_menu_id: 4,
    // 	menu_icon: 'fas fa-comments',
    // 	menu_name: '摄影',
    // 	menu_sort: 1,
    // 	menu_target: '_self',
    // 	menu_url: '/community/discussions',
    // },
    // {
    // 	id: 8,
    // 	parent_menu_id: 4,
    // 	menu_icon: 'fas fa-comments',
    // 	menu_name: '发布',
    // 	menu_sort: 1,
    // 	menu_target: '_self',
    // 	menu_url: '/publish',
    // },
  ]);

  const themes = ["skin-dark", "sink-white"];
  const [currentTheme, setCurrentTheme] = useState(0);

  // 切换主题
  const changeTheme = () => {
    if (currentTheme === themes.length - 1) {
      setCurrentTheme(0);
    } else {
      setCurrentTheme(currentTheme + 1);
    }
    const body = document.body;
    themes.forEach((e) => {
      body.classList.remove(e);
    });
    body.classList.add(themes[currentTheme]);
  };
  return (
    <div className="LdMenu">
      <header className="pc-menu  backdrop-blur-xl bg-skin-menu-bg  pt-5 pb-5 pl-5 pr-5  hidden md:flex justify-between">
        <div className="logo font-bold">村望老弟</div>
        <div className="menuContainer lg:w-1/2 md:w-full flex ">
          {menuList.map((v) => {
            return (
              <Link
                target={v.menu_target}
                href={v.menu_url}
                className="menuItem flex-nowrap ml-5 text-skin-content"
                key={v.id}
              >
                {v.menu_name}
              </Link>
            );
          })}
        </div>
        <div className="action" onClick={changeTheme}>
          Theme
        </div>
      </header>
      <header
        className={`mobile-menu  p-10 lg:w-1/2 md:w-full bg-skin-menu-bg duration-100 sticky top-0 text-skin-menu-content backdrop-blur md:hidden  ${
          open ? "h-lvh fixed" : "h-[64px]"
        } overflow-hidden  pt-5 pb-5`}
      >
        <div className="top flex justify-between">
          <div className="logo">村望老弟</div>
          <div className="bars" onClick={() => setOpen(!open)}>
            <span
              className={`transition-all duration-10 bg-skin-menu-content bread1 w-10 h-1 mt-1 mb-1 block  ${
                open && "rotate-45  -translate-x-2 translate-y-2"
              }`}
            ></span>
            <span
              className={`transition-all duration-10 bg-skin-menu-content bread1 w-10 h-1 mt-1 mb-1 block  ${
                open && "opacity-0"
              }`}
            ></span>
            <span
              className={`transition-all duration-10 bg-skin-menu-content bread1 w-10 h-1 mt-1 mb-1 block  ${
                open && `-rotate-45 -translate-x-2 -translate-y-2`
              }`}
            ></span>
          </div>
        </div>
        <div
          className={`fullScreeMenu  rounded-b-lg transition-top duration-75  w-full
					}`}
        >
          {menuList.map((v) => {
            return (
              <Link
                target={v.menu_target}
                href={v.menu_url}
                key={v.id}
                className="menuItem  text-skin-menu-content   cursor-pointer text-center block m-5 p-3 box-border"
              >
                {v.menu_name}
              </Link>
            );
          })}
          <div className="text-center m-5 p-3 box-border" onClick={changeTheme}>
            Theme
          </div>
        </div>
      </header>
    </div>
  );
};
export default LdMenu;
