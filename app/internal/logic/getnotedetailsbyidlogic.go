package logic

import (
	"context"

	"go-zero-single/app/internal/svc"
	"go-zero-single/app/internal/types"
	"go-zero-single/app/models/dal"

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

func (l *GetNoteDetailsByIdLogic) GetNoteDetailsById(req *types.GetNoteDetailsRequest) (resp *types.GetNoteDetailsResponse, err error) {
	// todo: add your logic here and delete this line
	LdNote := dal.LdNote
	res, err := LdNote.Where(LdNote.ID.Eq(req.Id)).First()
	if err != nil {
		return nil, err
	}
	ret := &types.GetNoteDetailsResponse{
		Id:        res.ID,
		ContentMd: res.ContentMd,
	}
	return ret, nil
}
