CREATE TABLE tbl_file
(
    id         INT(11)       NOT NULL AUTO_INCREMENT COMMENT 'ID',
    file_shal  CHAR(40)      NOT NULL DEFAULT '' COMMENT '文件hash',
    file_name  VARCHAR(256)  NOT NULL DEFAULT '' COMMENT '文件名',
    file_size  BIGINT(20)             DEFAULT 0 COMMENT '文件大小',
    file_addr  VARCHAR(1024) NOT NULL DEFAULT '' COMMENT '文件存储位置',
    created_at DATETIME               DEFAULT CURRENT_TIMESTAMP COMMENT '创建日期',
    updated_at DATETIME               DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日期',
    status     INT(11)       NOT NULL DEFAULT 0 COMMENT '状态（可用/禁用/已刷除等状态）',
    ext1       INT(11)                DEFAULT 0 COMMENT '备用字段1',
    ext2       TEXT COMMENT '备用字段2',
    PRIMARY KEY (id),
    UNIQUE KEY idx_file_hash (file_shal),
    KEY idx_status (status)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;
