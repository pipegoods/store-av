import ProductCard from '@/components/product-card'
import { getProducts } from '@/services/product'

export default async function HomePage() {
	const products = await getProducts()

	return (
		<main className='grid grid-cols-1 gap-6 p-6 md:grid-cols-3'>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</main>
	)
}
