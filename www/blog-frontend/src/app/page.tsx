import LdBanner from '../components/LdBanner'
import LdCategory from '../components/LdCategory'
import LdNoteList from '../components/LdNoteList'
import LdSign from '../components/LdSign'

export default function Home() {
	return (
		<div>
			{/* 签名 */}
			{/* <LdSign></LdSign> */}
			{/* 封面图 */}
			{/* <LdBanner></LdBanner> */}
			{/* 分类图 */}
			{/* <LdCategory></LdCategory> */}
			{/* 文章列表 */}
			<div className='recentNotes lg:w-1/2 md:w-full m-auto p-10'>
				<LdNoteList></LdNoteList>
			</div>
			{/* .. */}
		</div>
	)
}
