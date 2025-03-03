'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Eye, Plus } from 'lucide-react'
import { getImageUrl } from '@/lib/get-image-url'
import { Product } from '@/services/product'
import { useCartStore } from '@/store/cart'
import { Button, buttonVariants } from './ui/button'

export function ProductList({ products }: { products: Product[] }) {
	const addToCart = useCartStore((state) => state.addToCart)

	return (
		<div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-x-4 gap-y-10'>
			{products.map((product) => (
				<div key={product.id} className='group relative'>
					<div className='aspect-square relative mb-2 overflow-hidden'>
						<Image
							src={getImageUrl('products', product.image) || '/placeholder.svg'}
							alt={product.name || product.code}
							fill
							className='object-contain transition-transform group-hover:scale-105'
						/>
						<div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-opacity flex items-center justify-center'>
							<div className='opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2'>
								<Link
									href={`/product/${product.id}`}
									className={buttonVariants({
										size: 'icon',
										variant: 'secondary',
										className: 'rounded-full'
									})}
								>
									<Eye className='h-4 w-4' />
								</Link>
								<Button
									variant='secondary'
									size='icon'
									className='rounded-full'
									onClick={(e) => {
										e.stopPropagation()
										addToCart(product)
									}}
								>
									<Plus className='h-4 w-4' />
								</Button>
							</div>
						</div>
					</div>
					<p className='text-xs text-center font-normal'>{product.code}</p>
					{product.name && (
						<p className='text-[10px] text-center text-gray-500 mt-1 line-clamp-2'>
							{product.name}
						</p>
					)}
				</div>
			))}
		</div>
	)
}
