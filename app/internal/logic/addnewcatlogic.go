package logic

import (
	"context"
	"fmt"

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
	// todo: add your logic here and delete this line
	fmt.Print(req.Cat_name)
	fmt.Print(req.Cat_desc)
	return &types.AddCatResponse{Id: "111"}, nil
}
