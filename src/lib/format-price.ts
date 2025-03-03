export function formatPrice(price: number): string {
	return new Intl.NumberFormat('es-CO', {
		style: 'currency',
		currency: 'COP',
		currencyDisplay: 'code',
		maximumFractionDigits: 0
	}).format(price)
}
