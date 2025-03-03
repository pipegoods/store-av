'use client'

import Image from 'next/image'
import { Menu, ShoppingCart, X } from 'lucide-react'
import { generateWhatsAppMessage } from '@/lib/cart-utils'
import { getImageUrl } from '@/lib/get-image-url'
import { useCartStore } from '@/store/cart'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from './ui/sheet'

export function Header() {
	const cart = useCartStore((state) => state.cart)
	const removeFromCart = useCartStore((state) => state.removeFromCart)

	const handleBuyNowClick = () => {
		const message = generateWhatsAppMessage(cart)
		window.location.href = `https://wa.me/573167966709?text=${message}`
	}

	return (
		<header className='sticky top-0 z-10 bg-white py-5 px-4'>
			<div className='flex justify-between items-center'>
				<Sheet>
					<SheetTrigger>
						<Menu className='h-6 w-6 text-black' />
					</SheetTrigger>
					<SheetContent className='p-6' side='left'>
						<SheetHeader className='p-0'>
							<SheetTitle>AVStore</SheetTitle>
						</SheetHeader>
						<div className='mt-6 space-y-4'>
							<p className='text-sm'>
								Tu tienda virtual de componentes de computadora. Visita nuestro{' '}
								<a
									href='https://dub.sh/8QXihh1'
									target='_blank'
									rel='noopener noreferrer'
									className='text-blue-600 hover:underline'
								>
									perfil de Facebook Marketplace
								</a>{' '}
								y disfruta de envíos a todo Colombia.
							</p>
							<nav className='space-y-2'>
								<a
									href='https://dub.sh/rWsdr17'
									target='_blank'
									rel='noopener noreferrer'
									className='block text-sm hover:underline'
								>
									Contacto
								</a>
								<a href='#' className='block text-sm hover:underline'>
									Términos y Condiciones
								</a>
							</nav>
						</div>
					</SheetContent>
				</Sheet>

				<span className='text-xl font-bold'>AVStore</span>
				<Sheet>
					<SheetTrigger>
						<div className='relative'>
							<ShoppingCart className='h-6 w-6 text-black' />
							{cart.length > 0 && (
								<span className='absolute -top-1 -right-1 bg-black text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center'>
									{cart.length}
								</span>
							)}
						</div>
					</SheetTrigger>
					<SheetContent className='p-6'>
						<SheetHeader className='p-0'>
							<SheetTitle>Tu carrito</SheetTitle>
						</SheetHeader>
						<ScrollArea className='h-[calc(100vh-12rem)] mt-6'>
							{cart.length === 0 ? (
								<p className='text-sm text-gray-500'>Tu carrito está vacío.</p>
							) : (
								<ul className='space-y-4'>
									{cart.map((item, index) => {
										return (
											<li
												key={index}
												className='flex items-center justify-between'
											>
												<div className='flex items-center space-x-4'>
													<div className='relative w-16 h-16'>
														<Image
															src={
																getImageUrl('products', item?.image) ||
																'/placeholder.svg'
															}
															alt={item.name}
															fill
															className='object-contain'
														/>
													</div>
													<span className='text-sm font-medium'>
														{item.code}
													</span>
												</div>

												<Button
													variant='ghost'
													size='icon'
													onClick={() => removeFromCart(item.id)}
												>
													<X className='h-4 w-4' />
												</Button>
											</li>
										)
									})}
								</ul>
							)}
						</ScrollArea>
						{cart.length > 0 && (
							<div className='mt-6'>
								<Button className='w-full' onClick={handleBuyNowClick}>
									Cotizar por WhatsApp
								</Button>
							</div>
						)}
					</SheetContent>
				</Sheet>
			</div>
		</header>
	)
}
