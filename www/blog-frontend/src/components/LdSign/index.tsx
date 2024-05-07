import LazyImage from '../LdLazyImage'

const LdSign = () => {
	return (
		<div className='Sign text-center flex items-center justify-center lg:w-1/2 m-auto border-skin-content border'>
			<div className='left  flex-1'>
				<div className='zh text-4xl'>学习是一生的事情</div>
				<div className='en text-lg font-bold mt-5'>
					Learning is a lifelong thing
				</div>
			</div>
			<div className='right  flex-1'>
				<LazyImage
					className='h-2xl'
					src='https://images.unsplash.com/photo-1714573807672-873a892000c9?q=80&w=3230&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				></LazyImage>
			</div>
		</div>
	)
}

export default LdSign
