import LdMdEditorPure from '@/components/LdMdEditorPure'
import React from 'react'

const Publish: React.FC = () => {
	// 在这里，您可以根据 `id` 值从 API 或数据库获取对应文章的数据
	// 然后渲染文章详情

	return (
		<div>
			<LdMdEditorPure></LdMdEditorPure>
		</div>
	)
}

export default Publish
