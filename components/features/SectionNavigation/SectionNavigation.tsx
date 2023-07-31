import { SectionLink } from '@/components/entities/SectionLink'
import { Home, Search } from 'tabler-icons-react'
export const SectionNavigation = () => {
	return (
		<div className='flex flex-col px-4 py-4 bg-neutral-800 rounded-md'>
			<SectionLink
				Icon={<Home color='#fff' size={30} />}
				text='Главная'
				to='/'
			/>
			<SectionLink
				Icon={<Search color='#fff' size={30} />}
				text='Поиск'
				to='/search'
			/>
		</div>
	)
}
