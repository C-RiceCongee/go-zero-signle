import { fetchGet, fetchPost } from '@/utils/request'

export const getNotesList = (params: any) => fetchPost(`/api/notes/list`, params)
