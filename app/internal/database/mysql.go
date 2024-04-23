package database

import (
	"gorm.io/gen"
	"log"
	"os"
	"time"

	"gorm.io/gorm"
	"gorm.io/gorm/logger"

	_ "github.com/go-sql-driver/mysql"
	"gorm.io/driver/mysql"
)

var newLogger = logger.New(
	log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer（日志输出的目标，前缀和日志包含的内容——译者注）
	logger.Config{
		SlowThreshold:             time.Second,   // 慢 SQL 阈值
		LogLevel:                  logger.Silent, // 日志级别
		IgnoreRecordNotFoundError: true,          // 忽略ErrRecordNotFound（记录未找到）错误
		Colorful:                  false,         // 禁用彩色打印
	},
)

func genModel(db *gorm.DB) {
	g := gen.NewGenerator(gen.Config{
		OutPath:      "app/models/dal",
		ModelPkgPath: "app/models/models",
		OutFile:      "",
		Mode:         gen.WithoutContext | gen.WithDefaultQuery,
	})
	g.UseDB(db)
	g.ApplyBasic(g.GenerateAllTable()...)
	g.Execute()
}
func InitSqlxDB(dataSource string) (*gorm.DB, error) {
	db, err := gorm.Open(mysql.Open(dataSource), &gorm.Config{
		Logger: newLogger,
	})
	if err != nil {
		return nil, err
	}
	genModel(db)
	//dal.SetDefault(db)
	return db, nil
}
