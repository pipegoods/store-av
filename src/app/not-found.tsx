import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
	return (
		<main className='px-4 py-6 text-center'>
			<h2 className='text-3xl font-bold mb-4'>Página no encontrada</h2>
			<p className='text-gray-600 mb-8'>
				No se pudo encontrar el recurso solicitado.
			</p>
			<Link
				href='/'
				className='inline-flex items-center text-sm text-gray-600 hover:text-black'
				aria-label='Volver a inicio'
			>
				<ArrowLeft className='mr-2 h-4 w-4' />
				Volver a inicio
			</Link>
		</main>
	)
}
