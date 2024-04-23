## 命令
#gen:
#	gentool -dsn "root:CnrZ3wG5vxLzkzm@tcp(114.132.251.2:18888)/nest-neighbours-purchase?charset=utf8mb4&parseTime=True&loc=Local" -outPath "./app/models"


# 生成 api
gen-api:
	goctl api go -api app/apis/app.api -dir app/




