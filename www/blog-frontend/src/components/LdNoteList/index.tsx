import { NoteItem } from '@/types/note'
import Notes from './components/Notes'
interface ILdNoteListProps {
	data: NoteItem[]
}
const LdNoteList: React.FC<ILdNoteListProps> = ({ data }) => {
	return (
		<div className='LdNoteList'>
			{data.map(v => {
				return <Notes key={v.id} data={v}></Notes>
			})}
		</div>
	)
}

export default LdNoteList
