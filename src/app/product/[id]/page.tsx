import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
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
			>
				<ArrowLeft className='mr-2 h-4 w-4' />
				Back to products
			</Link>
			<div className='grid md:grid-cols-2 gap-12'>
				<div className='flex items-center justify-center'>
					<Image
						src={getImageUrl('products', product.image) || '/placeholder.svg'}
						alt={product.name}
						width={1000}
						height={1000}
						className='object-contain max-h-[500px] w-auto h-auto'
					/>
				</div>
				<div>
					<h1 className='text-3xl font-bold mb-2'>{product.name}</h1>
					<p className='text-xl font-semibold mb-6'>{product.price}</p>
					<p className='text-gray-600 mb-6'>{product.description}</p>
					<div className='mb-8'>
						<h2 className='text-lg font-semibold mb-2'>Specifications:</h2>
						{/* <ul className='list-disc pl-5 text-gray-600'>
							{product.specs.map((spec, index) => (
								<li key={index}>{spec}</li>
							))}
						</ul> */}
					</div>
					<ButtonAddCart product={product} />
				</div>
			</div>
		</main>
	)
}
