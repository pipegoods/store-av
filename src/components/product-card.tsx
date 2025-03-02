// src/components/ProductCard.tsx
import Link from 'next/link'
import { Product } from '@/services/product'

export default function ProductCard({ product }: { product: Product }) {
	return (
		<div className='rounded-lg border p-4 shadow-md'>
			<img
				src={product.image}
				alt={product.name}
				className='h-48 w-full rounded object-cover'
			/>
			<h2 className='mt-2 text-lg font-semibold'>{product.name}</h2>
			<p className='text-gray-500'>${product.price.toFixed(2)}</p>
			<Link href={`/product/${product.id}`}>
				<button className='mt-2 w-full rounded bg-blue-500 px-4 py-2 text-white'>
					Ver más
				</button>
			</Link>
		</div>
	)
}
