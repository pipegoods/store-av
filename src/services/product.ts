import products from '@/data/products.json'

export type Product = {
	id: string
	name: string
	price: number
	image: string
	description: string
}

export const getProducts = async (): Promise<Product[]> => {
	return products // Más adelante, podrías hacer un fetch a una API.
}

export const getProductById = async (
	id: string
): Promise<Product | undefined> => {
	return products.find((product) => product.id === id)
}
