package handler

import (
	"net/http"

	"github.com/zeromicro/go-zero/rest/httpx"
	"go-zero-single/app/internal/logic"
	"go-zero-single/app/internal/svc"
)

func GetNoteDetailsByIdHandler(svcCtx *svc.ServiceContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		l := logic.NewGetNoteDetailsByIdLogic(r.Context(), svcCtx)
		err := l.GetNoteDetailsById()
		if err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
		} else {
			httpx.Ok(w)
		}
	}
}
