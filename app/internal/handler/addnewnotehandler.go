package handler

import (
	"go-zero-single/app/internal/logic"
	"go-zero-single/app/internal/svc"
	"go-zero-single/app/internal/types"
	"go-zero-single/common/response"
	"net/http"

	"github.com/zeromicro/go-zero/rest/httpx"
)

func AddNewNoteHandler(svcCtx *svc.ServiceContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req types.AddNewNoteRequest
		if err := httpx.Parse(r, &req); err != nil {
			httpx.Error(w, err)
			return
		}

		l := logic.NewAddNewNoteLogic(r.Context(), svcCtx)
		resp, err := l.AddNewNote(&req)
		response.Response(w, resp, err)

	}
}
