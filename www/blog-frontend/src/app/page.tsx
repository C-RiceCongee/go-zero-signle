import { get } from 'http'
import LdBanner from '../components/LdBanner'
import LdCategory from '../components/LdCategory'
import LdNoteList from '../components/LdNoteList'
import LdSign from '../components/LdSign'
import { fetchPost } from '@/utils/request'
import LdBook from '@/components/LdBook'

export default async function Home() {
	const data = await getHomePostData()
	const book = await getRencentBooks()
	return (
		<div>
			{/* 签名 */}
			{/* <LdSign></LdSign> */}
			{/* 封面图 */}
			{/* <LdBanner></LdBanner> */}
			{/* 分类图 */}
			{/* <LdCategory></LdCategory> */}
			<h3>最近看的书</h3>
			<div className='flex overflow-scroll'>
				{
					book.map(v => <LdBook description={''} tag={''} {...v}></LdBook>)
				}
			</div>
			{/* 文章列表 */}
			<h3>最近笔记</h3>
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

// 获取最近读的书
export async function getRencentBooks() {
	return [
		{
			name: "在细雨中呐喊",
			author: "余华",
			cover: "https://tse2-mm.cn.bing.net/th/id/OIP-C.7zRWZFA18DGqPUoslxD3NgHaLN?rs=1&pid=ImgDetMain",
			description: "“年轻时靠着祖上留下的钱风光了一阵子， 往后就越过越落魄了，这样反倒好，看看我身边的人，龙二和春生，他们也只是风光了一阵子， 到头来命都丢了。",
			tag: "已读完"
		},
		{
			name: "兄弟",
			author: "余华",
			cover: "https://tse3-mm.cn.bing.net/th/id/OIP-C.iZ9e4_5_4_XPTRcwX0Y8EQHaK6?rs=1&pid=ImgDetMain",
			description: "红袖章手里的理发推子像一把锯子在孙伟的头发上和脖子上绞割着，红袖章的用力和孙伟的拼命挣扎",
			tag: "已读完"
		},
		{
			name: "强风吹拂",
			author: "",
			cover: "https://tse3-mm.cn.bing.net/th/id/OIP-C.8ccjApqnX5YywenI1ZartwAAAA?rs=1&pid=ImgDetMain",
			description: `“明明这么痛苦，这么难过，为什么就是不能放弃跑步？因为全身细胞都在蠢蠢欲动，想要感受强风迎面吹拂的滋味。”`,
			tag: "已读完"
		},
		{
			name: "人生海海",
			author: "",
			cover: "https://ts4.cn.mm.bing.net/th?id=OIP.Ia7SPltqG2HLM9dw68oskwHaHa&w=298&h=298&c=10&rs=1&qlt=99&bgcl=fffffe&r=0&o=6&dpr=2&pid=MultiSMRSV2Source",
			description: `“杀人放火金腰带，救死扶伤无骨埋。说什么人生海海，命运无情，造化弄人，时代作恶。”`,
			tag: "已读完"
		},
	]
}