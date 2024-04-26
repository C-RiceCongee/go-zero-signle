DROP Table IF  EXISTS ld_menu;

CREATE TABLE `ld_menu` (
    `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    `parent_menu_id` bigint(20) default 0 COMMENT '上一级菜单id',
    `menu_icon` varchar(255) NULL COMMENT '菜单图标',
    `menu_name` varchar(255) NULL COMMENT '菜单名称',
    `menu_sort` int(11) NULL COMMENT '排序',
    `menu_target` varchar(255) NULL COMMENT '打开方式 新标签or当前标签',
    `menu_url` varchar(255) NULL COMMENT '菜单路径',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB COMMENT '博客-菜单表';