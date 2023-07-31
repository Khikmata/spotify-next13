import React from 'react'
import { Heart } from 'tabler-icons-react'
export const ListItem = () => {
	return (
		<div className='flex items-center bg-neutral-400 bg-opacity-10 h-20 rounded-md overflow-hidden hover:bg-opacity-20 duration-150'>
			<div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-20 w-20 flex items-center justify-center mr-3'>
				<Heart fill='white' stroke='none' />
			</div>
			<div>
				<p>Favorites</p>
			</div>
		</div>
	)
}
