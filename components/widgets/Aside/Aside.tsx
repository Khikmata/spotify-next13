import { Library } from '@/components/features/Library'
import { SectionNavigation } from '@/components/features/SectionNavigation'

export const Aside = () => {
	return (
		<div className='col-start-0 col-span-2'>
			<SectionNavigation />
			<Library />
		</div>
	)
}
