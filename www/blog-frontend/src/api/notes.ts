import { IResponse, fetchGet, fetchPost } from '@/utils/request'

// getNotesList 获取 note 列表
export const getNotesList = (params: any): Promise<IResponse<any>> => fetchPost(`/api/notes/list`, params)

// 获取 note 详情
export const getNotesDetails = (params: any): Promise<IResponse<any>> => fetchPost(`/api/notes/details`, params)
