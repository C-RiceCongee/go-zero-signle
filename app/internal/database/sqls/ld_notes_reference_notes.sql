CREATE TABLE `ld_notes_reference_notes` (
    `id` bigint unsigned NOT NULL AUTO_INCREMENT,
    `notes_id` bigint NOT NULL COMMENT `文章id`,
    `be_refrence_notes_id` bigint NOT NULL COMMENT `引用的文章id`,
    `be_refrence_notes_toc` varchar(255) NOT NULL COMMENT `引用的文章的目录`,
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '博客-文章互相引用的关系中间表';

SET
    FOREIGN_KEY_CHECKS = 1;