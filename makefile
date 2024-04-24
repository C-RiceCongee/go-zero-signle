## 命令
gen:
	go run cmd/gen/gen.go

# 生成 api
gen-api:
	goctl api go -api app/apis/app.api -dir app/




