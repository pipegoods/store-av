import { ProductList } from '@/components/product-list'
import { getProducts } from '@/services/product'

export default async function HomePage() {
	const products = await getProducts()

	return (
		<main className='px-4 py-6'>
			<ProductList products={products} />
		</main>
	)
}
