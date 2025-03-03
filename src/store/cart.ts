import { create } from 'zustand'
import { Product } from '@/services/product'

type CartState = {
	cart: Product[]
	addToCart: (product: Product) => void
	removeFromCart: (id: string) => void
	clearCart: () => void
}

export const useCartStore = create<CartState>((set) => ({
	cart: [],
	addToCart: (product) =>
		set((state) => ({
			cart: [...state.cart, product]
		})),
	removeFromCart: (id) =>
		set((state) => ({
			cart: state.cart.filter((product) => product.id !== id)
		})),
	clearCart: () => set({ cart: [] })
}))
