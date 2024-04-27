/*
 Navicat Premium Data Transfer
 
 Source Server         : 114.132.251.2
 Source Server Type    : MySQL
 Source Server Version : 80029 (8.0.29)
 Source Host           : 114.132.251.2:18888
 Source Schema         : ld-notes
 
 Target Server Type    : MySQL
 Target Server Version : 80029 (8.0.29)
 File Encoding         : 65001
 
 Date: 24/04/2024 21:39:37
 */
SET
  NAMES utf8mb4;

SET
  FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for ld_notes
-- ----------------------------
DROP TABLE IF EXISTS `ld_notes`;

CREATE TABLE `ld_notes` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '文章标题',
  `cover_image` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '文章封面图片',
  `content_md` mediumtext COLLATE utf8mb4_general_ci COMMENT 'markdown版的文章内容',
  `top` tinyint(1) DEFAULT '0' COMMENT '是否置顶',
  `type_id` bigint DEFAULT NULL COMMENT '类型',
  `tag_ids` bigint DEFAULT NULL COMMENT '标签',
  `reference_by` varchar(300) default NULL COMMENT '被其他文章引用的id+目录章节',
  `notes_status` tinyint(1) DEFAULT NULL COMMENT '状态',
  `is_recommended` tinyint(1) DEFAULT '1' COMMENT '是否推荐',
  `is_original` tinyint(1) DEFAULT '1' COMMENT '是否原创',
  `description` varchar(300) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '文章简介，最多200字',
  `keywords` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '文章关键字，优化搜索',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '添加时间',
  PRIMARY KEY (`id`),
  KEY `note_title_index` (`title`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '博客-文章表';

SET
  FOREIGN_KEY_CHECKS = 1;