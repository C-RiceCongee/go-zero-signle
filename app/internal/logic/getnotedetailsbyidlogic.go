package logic

import (
	"context"

	"go-zero-single/app/internal/svc"

	"github.com/zeromicro/go-zero/core/logx"
)

type GetNoteDetailsByIdLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

func NewGetNoteDetailsByIdLogic(ctx context.Context, svcCtx *svc.ServiceContext) *GetNoteDetailsByIdLogic {
	return &GetNoteDetailsByIdLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *GetNoteDetailsByIdLogic) GetNoteDetailsById() error {
	// todo: add your logic here and delete this line

	return nil
}
