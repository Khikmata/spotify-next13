import { ChevronRight, ChevronLeft } from 'tabler-icons-react'

export const Navigation = () => {
	return (
		<div className='flex align-middle py-2'>
			<button className='bg-neutral-900 rounded-full p-1 mr-2'>
				<ChevronLeft color='#adadad' />
			</button>
			<button className='bg-neutral-900 rounded-full p-1'>
				<ChevronRight color='#adadad' />
			</button>
		</div>
	)
}
