// src/app/cart/page.tsx
'use client'

import { useState } from 'react'
import { Product } from '@/services/product'

export default function CartPage() {
	const [cart, setCart] = useState<Product[]>([])

	const whatsappMessage = cart
		.map((p) => `- ${p.name} x1 = $${p.price.toFixed(2)}`)
		.join('\n')
	const whatsappLink = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`

	return (
		<div className='p-6'>
			<h1 className='text-2xl font-bold'>Carrito</h1>
			{cart.length === 0 ? (
				<p className='text-gray-500'>Tu carrito está vacío.</p>
			) : (
				<ul className='mt-4'>
					{cart.map((product) => (
						<li
							key={product.id}
							className='my-2 flex justify-between rounded border p-2'
						>
							{product.name} - ${product.price.toFixed(2)}
						</li>
					))}
				</ul>
			)}
			<a
				href={whatsappLink}
				className='mt-4 inline-block rounded bg-green-500 px-4 py-2 text-white'
			>
				Enviar pedido a WhatsApp
			</a>
		</div>
	)
}
