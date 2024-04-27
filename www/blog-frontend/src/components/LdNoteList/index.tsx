import LazyImage from "../LdLazyImage";
import Link from "next/link";
const LdNoteList = () => {
    const data = [{
        id: 1,
        title: 'JavaScript闭包',
        cover_image: 'https://images.unsplash.com/photo-1591788788660-5a345f363d7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
        content_md: '# 深入理解JavaScript闭包\n\n本文将详细介绍JavaScript闭包的概念、作用及应用场景，帮助开发者更好地掌握这一重要特性……',
        top: false,
        type_id: 1,
        tag_ids: 2,
        notes_status: 1,
        is_recommended: true,
        is_original: true,
        description: '全面解读JavaScript闭包的原理与实践',
        keywords: 'JavaScript, 闭包, 原理, 实践',
        create_time: new Date('2024-04-24T15:00:00Z'),
    }, {
        id: 1,
        title: '深入理解JavaScript',
        cover_image: 'https://images.unsplash.com/photo-1713530700621-5184bedc349e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
        content_md: '# 深入理解JavaScript闭包\n\n本文将详细介绍JavaScript闭包的概念、作用及应用场景，帮助开发者更好地掌握这一重要特性……',
        top: false,
        type_id: 1,
        tag_ids: 2,
        notes_status: 1,
        is_recommended: true,
        is_original: true,
        description: '闭包, 原理, 实践',
        keywords: 'JavaScript, 闭包, 原理, 实践',
        create_time: new Date('2024-04-24T15:00:00Z'),
    },]
    return <div className="LdNoteList">
        {
            data.map(v => {
                return < div className="rounded-2xl ldNoteItem shadow-ld-shadow-2 m-5 p-5 flex items-stretch" key={v.id}>
                    <LazyImage className="w-40 h-40 shadow-ld-shadow-1 rounded-2xl" src={v.cover_image}></LazyImage>
                    <div className="info ml-5 flex flex-col align justify-around">
                        <Link target="__blank" href={`/post/${v.id}`} className="title font-bold text-lg hover:text-blue-500"> {v.title}</Link>
                        <div className="create_time">2024-04-28</div>
                        <div className="description"> {v.description}</div>
                        <div className="keywords"> {v.keywords}</div>
                    </div>
                </div>
            })
        }
    </div>
}

export default LdNoteList;