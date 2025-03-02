// src/app/product/[id]/page.tsx
import { notFound } from 'next/navigation'
import { getProductById } from '@/services/product'

export default async function ProductPage({
	params
}: {
	params: { id: string }
}) {
	const product = await getProductById(params.id)
	if (!product) return notFound()

	const whatsappMessage = `Hola, estoy interesado en comprar ${product.name} por $${product.price.toFixed(2)}`
	const whatsappLink = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`

	return (
		<div className='p-6'>
			<img
				src={product.image}
				alt={product.name}
				className='h-64 w-full rounded object-cover'
			/>
			<h1 className='mt-4 text-2xl font-bold'>{product.name}</h1>
			<p className='text-gray-700'>{product.description}</p>
			<p className='text-xl font-semibold text-gray-900'>
				${product.price.toFixed(2)}
			</p>
			<a
				href={whatsappLink}
				className='mt-4 inline-block rounded bg-green-500 px-4 py-2 text-white'
			>
				Comprar por WhatsApp
			</a>
		</div>
	)
}
