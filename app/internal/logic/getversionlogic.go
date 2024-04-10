package logic

import (
	"context"

	"go-zero-single/app/internal/svc"
	"go-zero-single/app/internal/types"

	"github.com/zeromicro/go-zero/core/logx"
)

type GetVersionLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

func NewGetVersionLogic(ctx context.Context, svcCtx *svc.ServiceContext) *GetVersionLogic {
	return &GetVersionLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *GetVersionLogic) GetVersion(req *types.Request) (resp *types.Response, err error) {
	// todo: add your logic here and delete this line
	return &types.Response{Version: l.svcCtx.Config.Version}, err
}
