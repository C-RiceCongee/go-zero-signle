import LazyImage from '../LdLazyImage'

const LdBanner = () => {
	return (
		<div className='LdBanner'>
			<LazyImage
				className='rounded-lg h-1vh  w-full object-cover shadow-2xl absolute top-0 -z-10'
				src='https://images.unsplash.com/photo-1522463475764-0fe09a698cef?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			></LazyImage>
		</div>
	)
}

export default LdBanner
