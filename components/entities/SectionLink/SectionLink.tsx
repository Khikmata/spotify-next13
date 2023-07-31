import Link from 'next/link'
import { ReactNode } from 'react'
export const SectionLink = ({
	to,
	Icon,
	text,
}: {
	to: string
	Icon: ReactNode
	text: string
}) => {
	return (
		<Link
			href={to}
			className='flex color first:mb-4 items-center hover:[&>*]:text-neutral-100'>
			<div className='mr-4'>{Icon}</div>
			<p className='text-neutral-300 text-base font-bold w-full'>{text}</p>
		</Link>
	)
}
