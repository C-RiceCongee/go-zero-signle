import { getNotesDetails } from '@/api/notes'
import LdMdRenderer from '@/components/LdMdRenderer'
import { useRouter } from 'next/router'
import React from 'react'
const handleGetPostDetails = async (id: number) => {
	const res = await getNotesDetails({ id: Number(id) })
	if (res.code === 0) {
		return res.data
	}
}
const Post: React.FC = async props => {
	const res = await handleGetPostDetails(props.params.id)
	// 在这里，您可以根据 `id` 值从 API 或数据库获取对应文章的数据
	return (
		<div>
			<LdMdRenderer content={res.content_md}></LdMdRenderer>
		</div>
	)
}

export default Post
