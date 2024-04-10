package handler

import (
	"github.com/zeromicro/go-zero/rest/httpx"
	"go-zero-single/app/internal/logic"
	"go-zero-single/app/internal/svc"
	"go-zero-single/app/internal/types"
	"go-zero-single/common/response"
	"net/http"
)

func getVersionHandler(svcCtx *svc.ServiceContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req types.Request
		if err := httpx.Parse(r, &req); err != nil {
			httpx.Error(w, err)
			return
		}

		l := logic.NewGetVersionLogic(r.Context(), svcCtx)
		resp, err := l.GetVersion(&req)
		response.Response(w, resp, err)

	}
}
