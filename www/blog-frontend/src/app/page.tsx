import { get } from 'http'
import LdBanner from '../components/LdBanner'
import LdCategory from '../components/LdCategory'
import LdNoteList from '../components/LdNoteList'
import LdSign from '../components/LdSign'
import { fetchPost } from '@/utils/request'

export default async function Home() {
	const data = await getHomePostData()
	return (
		<div>
			{/* 签名 */}
			{/* <LdSign></LdSign> */}
			{/* 封面图 */}
			{/* <LdBanner></LdBanner> */}
			{/* 分类图 */}
			{/* <LdCategory></LdCategory> */}
			{/* 文章列表 */}
			<div className='recentNotes'>
				<LdNoteList data={data}></LdNoteList>
			</div>
			{/* .. */}
		</div>
	)
}

// 获取首页全部的 notes
export async function getHomePostData() {
	try {
		const res = await fetchPost('http://localhost:8888/api/notes/list', {
			page_no: 1,
			title: '',
			tag_ids: '',
			keywords: '',
			is_original: false,
			is_recommended: false,
			type_id: 0,
			page_size: 10,
		})
		if (res.code === 0 && res?.data?.list) {
			return res?.data?.list
		}
	} catch (e) {
		return []
	}
}
