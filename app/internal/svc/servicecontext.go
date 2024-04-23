package svc

import (
	"go-zero-single/app/internal/config"
	"go-zero-single/app/internal/database"

	"github.com/zeromicro/go-zero/core/logx"
	"gorm.io/gorm"
)

type ServiceContext struct {
	Config config.Config
	DB     *gorm.DB
}

func NewServiceContext(c config.Config) *ServiceContext {
	db, err := database.InitSqlxDB(c.Mysql.DataSource)
	if err != nil {
		logx.Error(err.Error())
	}
	return &ServiceContext{
		Config: c,
		DB:     db,
	}
}
