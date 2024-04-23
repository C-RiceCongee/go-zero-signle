package config

import (
	"go-zero-single/app/internal/database"

	"github.com/zeromicro/go-zero/rest"
)

type Config struct {
	rest.RestConf
	Version string
	Mysql   database.Mysql
}
