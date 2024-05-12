package logic

import (
	"context"
	"fmt"

	"go-zero-single/app/internal/svc"
	"go-zero-single/app/internal/types"
	"go-zero-single/app/models/dal"

	"github.com/zeromicro/go-zero/core/logx"
)

type GetNoteListLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

func NewGetNoteListLogic(ctx context.Context, svcCtx *svc.ServiceContext) *GetNoteListLogic {
	return &GetNoteListLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *GetNoteListLogic) GetNoteList(req *types.GetNoteListRequest) (resp *types.GetNoteListResponse, err error) {
	dalNote := dal.LdNote
	baseQuery := dal.LdNote.Where()
	if len(req.Title) > 0 {
		baseQuery = baseQuery.Where(dalNote.Title.Like(fmt.Sprintf("%%%s%%", req.Title)))
	}
	r, err := baseQuery.Offset(req.PageSize * (req.PageNo - 1)).Limit(req.PageSize).Debug().Find()
	if err != nil {
		return nil, err
	}
	c, err := baseQuery.Count()
	if err != nil {
		return nil, err
	}
	ret := make([]types.GetNoteListResponseItem, len(r))
	for i := range r {
		ret[i].Title = r[i].Title
		ret[i].CoverImage = r[i].CoverImage
		ret[i].NoteType = r[i].NoteType
		ret[i].Description = r[i].Description
	}
	return &types.GetNoteListResponse{
		List:  ret,
		Total: c,
	}, nil
}
