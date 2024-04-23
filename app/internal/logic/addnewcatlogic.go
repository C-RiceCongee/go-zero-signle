package logic

import (
	"context"
	"go-zero-single/app/models/dal"

	"go-zero-single/app/internal/svc"
	"go-zero-single/app/internal/types"

	"github.com/zeromicro/go-zero/core/logx"
)

type AddNewCatLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

func NewAddNewCatLogic(ctx context.Context, svcCtx *svc.ServiceContext) *AddNewCatLogic {
	return &AddNewCatLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *AddNewCatLogic) AddNewCat(req *types.AddCatRequest) (resp *types.AddCatResponse, err error) {
	find, _ := dal.Q.Recipe.First()
	return &types.AddCatResponse{Id: find.RecipeName}, nil
}
