import { unstable_ViewTransition as ViewTransition } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { formatPrice } from '@/lib/format-price'
import { getImageUrl } from '@/lib/get-image-url'
import { getProductById } from '@/services/product'
import { ButtonAddCart } from '../button-add-cart'

export default async function ProductPage({
	params
}: {
	params: { id: string }
}) {
	const product = await getProductById(params.id)
	if (!product) return notFound()

	return (
		<main className='px-4 py-6'>
			<Link
				href='/'
				className='inline-flex items-center text-sm text-gray-600 hover:text-black mb-8'
				aria-label='Volver a productos'
			>
				<ArrowLeft className='mr-2 h-4 w-4' />
				Volver a productos
			</Link>
			<div className='grid md:grid-cols-2 gap-12'>
				<div className='flex items-center justify-center'>
					<ViewTransition name={`product-${product.id}`}>
						<Image
							src={getImageUrl('products', product.image) || '/placeholder.svg'}
							alt={`Imagen del producto ${product.name}`}
							width={1000}
							height={1000}
							data-view-transition-name={`product-${product.id}`}
							className='object-contain max-h-[500px] w-auto h-auto'
						/>
					</ViewTransition>
				</div>
				<div>
					<h1 className='text-3xl font-bold mb-2'>{product.name}</h1>
					<p className='text-xl font-semibold mb-6'>
						{formatPrice(product.price)}
					</p>
					<p className='text-gray-600 mb-6'>{product.description}</p>
					<div className='mb-8'>
						<h2 className='text-lg font-semibold mb-2'>Características:</h2>
						<ul className='list-disc pl-5 text-gray-600'>
							{product.features.map((feature, index) => (
								<li key={index}>{feature}</li>
							))}
						</ul>
					</div>
					<div className='mb-8'>
						<a
							href={`${product.manufacturer_url}?ref=avstore`}
							target='_blank'
							rel='noopener noreferrer'
							className='text-2xl font-mono bg-gray-100 p-3 inline-block rounded hover:underline'
							aria-label={`Ir al sitio del fabricante para el producto ${product.name}`}
						>
							{product.code}
						</a>
					</div>
					<ButtonAddCart product={product} />
				</div>
			</div>
		</main>
	)
}
