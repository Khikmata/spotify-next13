import { Aside } from '@/components/widgets/Aside'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/widgets/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Spotify next',
	description: 'Spotify clone made using Next@13.4',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='grid grid-cols-8 py-2 px-3 gap-2'>
					<Aside />
					<Header />
					{children}
				</div>
			</body>
		</html>
	)
}
