import LdBanner from '../components/LdBanner'
import LdCategory from '../components/LdCategory'
import LdNoteList from '../components/LdNoteList'
import LdSign from '../components/LdSign'
import { getNotesList } from '@/api/notes'

export default async function Home() {
	const { code, data } = await handleGetNoteList()
	console.log(data)
	return (
		<div>
			{/* 签名 */}
			{/* <LdSign></LdSign> */}
			{/* 封面图 */}
			{/* <LdBanner></LdBanner> */}
			{/* 分类图 */}
			{/* <LdCategory></LdCategory> */}
			{/* 文章列表 */}
			<div className='recentNotes '>
				<LdNoteList data={data.list}></LdNoteList>
			</div>
			{/* .. */}
		</div>
	)
}

export async function handleGetNoteList() {
	let result = await getNotesList({
		"page_no": 1,
		"title": "",
		"tag_ids": "",
		"keywords": "",
		"is_original": false,
		"is_recommended": false,
		"type_id": 0,
		"page_size": 10

	})
	return result
}


