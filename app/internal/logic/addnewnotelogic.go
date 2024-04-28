package logic

import (
	"context"

	"go-zero-single/app/internal/svc"
	"go-zero-single/app/internal/types"
	"go-zero-single/app/models/dal"
	"go-zero-single/app/models/models"

	"github.com/zeromicro/go-zero/core/logx"
)

type AddNewNoteLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

func NewAddNewNoteLogic(ctx context.Context, svcCtx *svc.ServiceContext) *AddNewNoteLogic {
	return &AddNewNoteLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *AddNewNoteLogic) AddNewNote(req *types.AddNewNoteRequest) (resp *types.AddNewNoteResponse, err error) {
	// todo: add your logic here and delete this line
	newNote := &models.LdNote{
		Title:       req.Title,
		CoverImage:  req.CoverImage,
		ContentMd:   req.ContentMd,
		Top:         req.Top,
		TypeID:      req.TypeId,
		TagIds:      req.TagIds,
		IsOriginal:  req.IsOriginal,
		Description: req.Description,
		Keywords:    req.Keywords,
	}
	err = dal.LdNote.Create(newNote)
	if err != nil {
		return nil, err
	}
	return &types.AddNewNoteResponse{}, nil
}
