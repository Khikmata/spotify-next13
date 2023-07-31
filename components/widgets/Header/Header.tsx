import { ListItem } from '@/components/entities/ListItem'
import { AuthActions } from '@/components/features/AuthActions'
import { Navigation } from '@/components/features/Navigation'

export const Header = () => {
	return (
		<div className='col-start-0 col-span-6 place-items-center'>
			<div className='flex justify-between px-6 py-2 bg-neutral-800 rounded-md'>
				<Navigation />
				<AuthActions />
			</div>
			<div className='bg-gradient-to-b from-neutral-700 to-neutral-800 px-8 py-6'>
				<h2 className=' font-bold text-2xl text-neutral-100 mb-7'>Фокус</h2>
				<div className='grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-cols-4 grid-rows-2'>
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
				</div>
			</div>
		</div>
	)
}
