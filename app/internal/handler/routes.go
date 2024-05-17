// Code generated by goctl. DO NOT EDIT.
package handler

import (
	"net/http"

	"go-zero-single/app/internal/svc"

	"github.com/zeromicro/go-zero/rest"
)

func RegisterHandlers(server *rest.Server, serverCtx *svc.ServiceContext) {
	server.AddRoutes(
		[]rest.Route{
			{
				Method:  http.MethodGet,
				Path:    "/version",
				Handler: getVersionHandler(serverCtx),
			},
		},
		rest.WithPrefix("/api/app"),
	)

	server.AddRoutes(
		[]rest.Route{
			{
				Method:  http.MethodPost,
				Path:    "/add",
				Handler: addNewCatHandler(serverCtx),
			},
		},
		rest.WithPrefix("/api/category"),
	)

	server.AddRoutes(
		[]rest.Route{
			{
				Method:  http.MethodPost,
				Path:    "/add",
				Handler: AddNewNoteHandler(serverCtx),
			},
			{
				Method:  http.MethodPost,
				Path:    "/details",
				Handler: GetNoteDetailsByIdHandler(serverCtx),
			},
			{
				Method:  http.MethodPost,
				Path:    "/list",
				Handler: GetNoteListHandler(serverCtx),
			},
		},
		rest.WithPrefix("/api/notes"),
	)
}
