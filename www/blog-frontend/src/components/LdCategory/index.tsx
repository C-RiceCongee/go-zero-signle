import LazyImage from "../LdLazyImage"
import { LdCategoryList } from "./types"
const LdCategory = () => {
    const list: LdCategoryList = [
        {
            "id": 1,
            "category_id": 1,
            "category_name": "Javascript",
            "category_cover": "https://images.unsplash.com/photo-1687561114580-66fe98588cde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
            "category_url": "/categories/programming-languages",
            "category_describe": "涵盖各种编程语言的学习资源和教程",
            "category_color": "#1E88E5"
        },
        {
            "id": 2,
            "category_id": 2,
            "category_name": "Golang",
            "category_cover": "https://images.unsplash.com/photo-1503365053-19ea7a512386?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
            "category_url": "/categories/frontend-development",
            "category_describe": "HTML, CSS, JavaScript 等前端技术的文章和教程",
            "category_color": "#FFC107"
        },
        {
            "id": 3,
            "category_id": 3,
            "category_name": "Css",
            "category_cover": "https://images.unsplash.com/photo-1713694847163-f9fce967c146?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
            "category_url": "/categories/backend-development",
            "category_describe": "服务器端开发、数据库、API 设计等相关内容",
            "category_color": "#4CAF50"
        },
        {
            "id": 4,
            "category_id": 4,
            "category_name": "HTML",
            "category_cover": "https://images.unsplash.com/photo-1713694847163-f9fce967c146?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
            "category_url": "/categories/backend-development",
            "category_describe": "服务器端开发、数据库、API 设计等相关内容",
            "category_color": "#4CAF50"
        },
        {
            "id": 5,
            "category_id": 5,
            "category_name": "Threejs",
            "category_cover": "https://images.unsplash.com/photo-1713694847163-f9fce967c146?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
            "category_url": "/categories/backend-development",
            "category_describe": "服务器端开发、数据库、API 设计等相关内容",
            "category_color": "#4CAF50"
        },
        {
            "id": 6,
            "category_id": 6,
            "category_name": "Threejs",
            "category_cover": "https://images.unsplash.com/photo-1713694847163-f9fce967c146?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
            "category_url": "/categories/backend-development",
            "category_describe": "服务器端开发、数据库、API 设计等相关内容",
            "category_color": "#4CAF50"
        },
        {
            "id": 7,
            "category_id": 7,
            "category_name": "Threejs",
            "category_cover": "https://images.unsplash.com/photo-1713694847163-f9fce967c146?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
            "category_url": "/categories/backend-development",
            "category_describe": "服务器端开发、数据库、API 设计等相关内容",
            "category_color": "#4CAF50"
        }
    ]
    return <div className="LdCategory w-full">
        {/* 到时候做成一个左右滚动的吧 */}
        <div className="container flex flex-wrap items-center justify-center m-auto mt-5">
            {
                list.map(v => {
                    return <div key={v.id} className="cateItem  p-2 shadow-ld-shadow-1 m-1">
                        <LazyImage src={v.category_cover} className="w-40 h-20 object-cover"></LazyImage>
                        <div className="category_name font-bold text-sm mt-2">{v.category_name}</div>
                    </div>
                })
            }
        </div>
    </div>
}

export default LdCategory;