import { ClearAll, Plus } from 'tabler-icons-react'
export const Library = () => {
	return (
		<div className='flex flex-col mt-2 px-5 py-2 bg-neutral-800 rounded-md'>
			<div className='flex justify-between items-center py-2 '>
				<div className='flex items-center'>
					<ClearAll size={30} color='#fff' className='mr-2' />
					<p>Моя медиатека</p>
				</div>
				<div>
					<Plus />
				</div>
			</div>
		</div>
	)
}
