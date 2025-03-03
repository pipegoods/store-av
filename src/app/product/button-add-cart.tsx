'use client'

import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Product } from '@/services/product'
import { useCartStore } from '@/store/cart'

export function ButtonAddCart({ product }: { product: Product }) {
	const addToCart = useCartStore((state) => state.addToCart)
	const cart = useCartStore((state) => state.cart)

	const isInCart = cart.some((item) => item.id === product.id)

	return (
		<Button
			onClick={() => addToCart(product)}
			disabled={isInCart}
			className='w-full md:w-auto'
			aria-label={
				isInCart ? 'Producto añadido al carrito' : 'Agregar producto al carrito'
			}
			role='button'
		>
			<ShoppingCart className='mr-2 h-4 w-4' />
			{isInCart ? 'Añadido al Carrito' : 'Agregar al Carrito'}
		</Button>
	)
}
