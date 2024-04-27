interface LazyImageProps extends React.HTMLProps<HTMLImageElement> {
    // 添加您自定义的额外属性（如果有）
  }
const LazyImage: React.FC<LazyImageProps> = (props) => {
    return <img {...props}></img>
}

export default LazyImage;