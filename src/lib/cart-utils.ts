import { Product } from '@/services/product'

export const generateWhatsAppMessage = (cart: Product[]) => {
	let message = 'Hola, me gustaría comprar los siguientes productos:\n\n'
	cart.forEach((item) => {
		message += `- ${item.name} (${item.code}): $${item.price}\n`
	})
	message += `\nTotal: $${cart.reduce((total, item) => total + item.price, 0)}`
	return encodeURIComponent(message)
}
