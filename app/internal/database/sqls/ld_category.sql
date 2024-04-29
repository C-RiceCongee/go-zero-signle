DROP TABLE IF EXISTS `ld_category`;

CREATE TABLE `ld_category` (
    `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    `category_name` varchar(255) NULL COMMENT '分类名称',
    `category_cover` varchar(255) NULL COMMENT '分类封面',
    `category_url` varchar(255) NULL COMMENT '分类路径',
    `category_describe` varchar(255) NULL COMMENT '描述',
    `category_color` VARCHAR(10) NULL DEFAULT('#000') COMMENT '标签颜色',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB COMMENT '博客-分类表';