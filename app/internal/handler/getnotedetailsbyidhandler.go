package handler

import (
	"go-zero-single/app/internal/logic"
	"go-zero-single/app/internal/svc"
	"go-zero-single/common/response"
	"net/http"
)

func GetNoteDetailsByIdHandler(svcCtx *svc.ServiceContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {

		l := logic.NewGetNoteDetailsByIdLogic(r.Context(), svcCtx)
		err := l.GetNoteDetailsById()
		response.Response(w, nil, err)

	}
}
