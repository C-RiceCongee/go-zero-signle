# 安装依赖
install:
	go mod tidy && cd www/blog-frontend && npm i

## 命令
gen:
	go run cmd/gen/gen.go

# 生成 api
gen-api:
	goctl api go -api app/apis/app.api -dir app/


# 启动app
app:
	go run app/app.go -f app/etc/app.yaml

web:
	cd www/blog-frontend && npm run dev

commit = "update code"
# 提交代码
push:
	git add .
	git commit -m 'feat: $(commit) 🚀🚀🚀'
	git push origin main