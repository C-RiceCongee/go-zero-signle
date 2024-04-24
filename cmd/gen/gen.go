package main

import (
	"log"

	"gorm.io/driver/mysql"
	"gorm.io/gen"
	"gorm.io/gorm"
)

func GenModel() {
	db, err := gorm.Open(mysql.Open("root:CnrZ3wG5vxLzkzm@tcp(114.132.251.2:18888)/ld-notes?charset=utf8mb4&parseTime=True&loc=Local"))
	if err != nil {
		log.Fatal(err.Error())
	}
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

func main() {
	GenModel()
}
