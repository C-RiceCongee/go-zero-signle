// Code generated by goctl. DO NOT EDIT.
package types

type AddNewNoteRequest struct {
	Title         string `json:"title"`
	ContentMd     string `json:"content_md"`
	CoverImage    string `json:"cover_image"`
	Top           bool   `json:"top"`
	TypeId        int64  `json:"type_id"`
	TagIds        string `json:"tag_ids"`
	IsOriginal    bool   `json:"is_original"`
	IsRecommended bool   `json:"is_recommended"`
	Description   string `json:"description"`
	Keywords      string `json:"keywords"`
}

type AddNewNoteResponse struct {
}

type GetNoteListRequest struct {
	PageNo        int    `json:"page_no"`
	PageSize      int    `json:"page_size"`
	Title         string `json:"title"`
	TypeId        int64  `json:"type_id"`
	TagIds        string `json:"tag_ids"`
	IsOriginal    bool   `json:"is_original"`
	IsRecommended bool   `json:"is_recommended"`
	Keywords      string `json:"keywords"`
}

type GetNoteListResponse struct {
	List  []GetNoteListResponseItem `json:"list"`
	Total int64                     `json:"total"`
}

type GetNoteListResponseItem struct {
	Title         string `json:"title"`
	CoverImage    string `json:"cover_image"`
	Description   string `json:"description"`
	Top           bool   `json:"top"`
	TypeId        int64  `json:"type_id"`
	TagIds        string `json:"tag_ids"`
	IsOriginal    bool   `json:"is_original"`
	IsRecommended bool   `json:"is_recommended"`
}

type AddCatRequest struct {
	Cat_name string `json:"catName"`
	Cat_desc string `json:"catDesc"`
}

type AddCatResponse struct {
	Id string `json:"id"`
}

type Request struct {
}

type Response struct {
	Version string
}
