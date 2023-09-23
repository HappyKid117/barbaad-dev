import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Barbaad Blog',
	description: 'Generated with pain and suffering through nextjs',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="dark:bg-slate-800">
				<Navbar />
				{children}
			</body>
		</html>
	)
}
