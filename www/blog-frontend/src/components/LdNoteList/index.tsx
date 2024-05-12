import LazyImage from '../LdLazyImage'
import Link from 'next/link'
import Notes from './components/Notes'

const LdNoteList = ({ data }) => {
	return (
		<div className='LdNoteList' style={{ fontFamily: "MyFont" }}>
			{data.map(v => {
				return <Notes key={v.id} data={v}></Notes>
			})}
		</div>
	)
}

export default LdNoteList
