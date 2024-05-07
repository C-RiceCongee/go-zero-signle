import LazyImage from '../LdLazyImage'
import Link from 'next/link'
import Notes from './components/Notes'
const LdNoteList = () => {
	const data = [
		{
			id: 1,
			title: '五一假期之登高望远',
			cover_image:
				'https://images.unsplash.com/photo-1591788788660-5a345f363d7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
			content_md:
				'# 深入理解JavaScript闭包\n\n本文将详细介绍JavaScript闭包的概念、作用及应用场景，帮助开发者更好地掌握这一重要特性……',
			top: false,
			type_id: 1,
			tag_ids: 2,
			notes_status: 1,
			is_recommended: true,
			is_original: true,
			description:
				'上次爬山还是 2021 年初，即使家门口就有个临平山公园，开发得也非常好，但一直也没想着要去再爬一次。也许跟小时候就是在山沟沟里长大有关，砍柴要上山、放牛要上山、干一些农活也要上山，所以对山已经免疫了，提不起什么兴趣。如果是说去看海，那分分钟钟立马得去。',
			keywords: 'JavaScript, 闭包, 原理, 实践',
			create_time: new Date('2024-04-24T15:00:00Z'),
		},
		{
			id: 1,
			title: '深入理解JavaScript',
			cover_image:
				'https://images.unsplash.com/photo-1713530700621-5184bedc349e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
			content_md:
				'# 深入理解JavaScript闭包\n\n本文将详细介绍JavaScript闭包的概念、作用及应用场景，帮助开发者更好地掌握这一重要特性……',
			top: false,
			type_id: 1,
			tag_ids: 2,
			notes_status: 1,
			is_recommended: true,
			is_original: true,
			description:
				'深入理解JavaScript闭包\n\n本文将详细介绍JavaScript闭包的概念、作用及应用场景，帮助开发者更好地掌握这一重要特性',
			keywords: 'JavaScript, 闭包, 原理, 实践',
			create_time: new Date('2024-04-24T15:00:00Z'),
		},
	]
	return (
		<div className='LdNoteList'>
			{data.map(v => {
				return <Notes key={v.id} data={v}></Notes>
			})}
		</div>
	)
}

export default LdNoteList
