import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import type { Viewport } from 'next'
import { Header } from '@/components/header'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const viewport: Viewport = {
	themeColor: 'black'
}

export const metadata: Metadata = {
	title: 'AVStore - Hardware a tu alcance',
	description:
		'Tu aliado para encontrar el mejor hardware de Colombia. En AVStore ofrecemos componentes de computadora ideales para gaming y uso profesional, con envíos a toda Colombia y hardware al mejor precio. Expertos en tecnología al servicio de tus necesidades.',
	keywords: [
		'AVStore',
		'hardware',
		'gaming',
		'componentes de computadora',
		'envíos a toda Colombia',
		'hardware al mejor precio',
		'expertos en tecnología',
		'PC gaming'
	],
	openGraph: {
		title: 'AVStore - Hardware a tu alcance',
		description:
			'Tu aliado para encontrar el mejor hardware de Colombia. Compra componentes ideales para gaming y profesionales en AVStore, con envíos a toda Colombia y hardware al mejor precio.',
		url: 'https://store.andresvizcaino.com',
		siteName: 'AVStore'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'AVStore - Hardware a tu alcance',
		description:
			'Tu aliado para encontrar el mejor hardware de Colombia. Descubre componentes de computadora para gaming y profesionales, con envíos a toda Colombia y hardware al mejor precio.'
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='es'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white`}
				role='main'
			>
				<Header />
				{children}
			</body>
		</html>
	)
}
