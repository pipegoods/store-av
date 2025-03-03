import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsAndConditionsPage() {
	return (
		<main className='px-4 py-6'>
			<Link
				href='/'
				className='inline-flex items-center text-sm text-gray-600 hover:text-black mb-8'
				aria-label='Volver a productos'
			>
				<ArrowLeft className='mr-2 h-4 w-4' />
				Volver a productos
			</Link>
			<h1 className='text-3xl font-bold mb-4'>Términos y Condiciones</h1>
			<p className='text-gray-600 mb-4'>
				Última actualización: 02 de marzo de 2025
			</p>

			<h2 className='text-xl font-semibold mb-2'>Introducción</h2>
			<p className='text-gray-600 mb-4'>
				Bienvenido a AVStore. Al acceder y utilizar este sitio web, así como al
				realizar cualquier compra, aceptas en su totalidad los términos y
				condiciones que se describen a continuación. Nuestra prioridad es
				brindarte una experiencia de compra transparente, segura y confiable,
				por lo que te recomendamos leer detenidamente esta información. Estos
				términos regulan el uso de nuestros servicios y establecen los derechos
				y obligaciones tanto del usuario como de AVStore.
			</p>

			<h2 className='text-xl font-semibold mb-2'>Uso de Cookies</h2>
			<p className='text-gray-600 mb-4'>
				En AVStore utilizamos cookies para mejorar la funcionalidad y optimizar
				la experiencia de usuario. Las cookies nos permiten recordar tus
				preferencias, agilizar la navegación y personalizar el contenido que
				ves. Al continuar utilizando nuestro sitio web, aceptas el uso de
				cookies de acuerdo con nuestra política de privacidad. Si deseas conocer
				más detalles sobre cómo protegemos y gestionamos tus datos, te invitamos
				a revisar la sección de privacidad de nuestro sitio.
			</p>

			<h2 className='text-xl font-semibold mb-2'>Política de Pagos</h2>
			<p className='text-gray-600 mb-4'>
				Todos los productos disponibles en AVStore tienen precios fijos, los
				cuales se muestran de manera clara en la plataforma. Durante el proceso
				de compra, encontrarás diversas opciones de pago, cada una con sus
				condiciones y posibles costos adicionales. Te recomendamos revisar
				detalladamente la información de cada método para que puedas seleccionar
				la opción que mejor se adapte a tus necesidades. Nuestro compromiso es
				garantizar la transparencia en cada transacción, asegurando que cada
				compra se realice de forma segura y sin complicaciones.
			</p>

			<h2 className='text-xl font-semibold mb-2'>Envíos y Entregas</h2>
			<p className='text-gray-600 mb-4'>
				El proceso de envío y entrega de tus productos es responsabilidad del
				comprador. El costo final del envío dependerá del servicio de mensajería
				seleccionado durante la compra, considerando factores como la ubicación
				y las tarifas de la transportadora. En AVStore nos esforzamos por
				despachar tus pedidos en el menor tiempo posible, pero los plazos de
				entrega definitivos estarán sujetos a las condiciones y tiempos
				establecidos por el servicio de mensajería. Trabajamos con
				transportadoras reconocidas para garantizar que tus productos lleguen en
				óptimas condiciones.
			</p>

			<h2 className='text-xl font-semibold mb-2'>Devoluciones y Garantías</h2>
			<p className='text-gray-600 mb-4'>
				La satisfacción del cliente es fundamental para AVStore. Por ello,
				ofrecemos una garantía de 6 meses para todos los productos adquiridos a
				través de nuestra plataforma. Esta garantía cubre defectos de
				fabricación y fallos en el funcionamiento bajo condiciones normales de
				uso. Además, cada producto cuenta con la garantía extendida del
				fabricante, la cual podemos ayudarte a gestionar en caso de requerir
				asistencia. Las solicitudes de devolución se evaluarán cuidadosamente y
				se aceptarán únicamente en casos en que el producto presente defectos o
				no cumpla con las especificaciones anunciadas.
			</p>

			<h2 className='text-xl font-semibold mb-2'>
				Limitaciones de Responsabilidad y Exención de Garantía
			</h2>
			<p className='text-gray-600 mb-4'>
				La información, características y descripciones de los productos en
				AVStore se presentan de buena fe y se ofrecen “tal cual”, sin garantías
				expresas o implícitas sobre su exactitud o idoneidad para un fin
				particular. AVStore no asume responsabilidad alguna por daños directos,
				indirectos o incidentales que puedan surgir del uso o la imposibilidad
				de uso de los productos, ni por errores u omisiones en la información
				presentada. Te recomendamos revisar detenidamente las especificaciones
				de cada producto antes de efectuar la compra.
			</p>

			<h2 className='text-xl font-semibold mb-2'>Protección de Datos</h2>
			<p className='text-gray-600 mb-4'>
				Aunque nuestro sitio web no requiere la recopilación obligatoria de
				datos personales para navegar o comprar, en caso de que decidas
				proporcionar información de forma voluntaria, esta será utilizada
				únicamente para gestionar tus pedidos y mejorar tu experiencia en
				AVStore. Nos comprometemos a proteger tu privacidad y a tratar tus datos
				con la máxima confidencialidad, siguiendo las normativas vigentes en
				materia de comercio electrónico.
			</p>

			<h2 className='text-xl font-semibold mb-2'>Legislación Aplicable</h2>
			<p className='text-gray-600 mb-4'>
				Estos términos y condiciones se rigen por la Ley de Comercio Electrónico
				vigente en Colombia. Al utilizar nuestros servicios, aceptas que
				cualquier controversia o discrepancia que surja en relación con el uso
				del sitio web o la realización de compras se resolverá conforme a esta
				normativa.
			</p>

			<h2 className='text-xl font-semibold mb-2'>Resolución de Disputas</h2>
			<p className='text-gray-600 mb-4'>
				En caso de que surja alguna discrepancia o conflicto relacionado con el
				uso de nuestro sitio o la ejecución de alguna compra, te invitamos a
				ponerte en contacto con nosotros de manera directa. Todas las disputas
				serán gestionadas de forma personalizada y directa por{' '}
				<strong>
					<a
						href='https://dub.sh/rWsdr17'
						className='hover:underline'
						role='button'
						aria-label='Contactar a Andrés Vizcaíno'
					>
						Andrés Vizcaíno
					</a>
				</strong>
				, quien se encargará de mediar y resolver cualquier inconveniente o
				consulta legal que se presente.
			</p>

			<h2 className='text-xl font-semibold mb-2'>Otros Términos</h2>
			<p className='text-gray-600 mb-4'>
				Todos los precios en AVStore son fijos y no están sujetos a negociación.
				Los costos relacionados con el envío, así como la elección del servicio
				de mensajería, son responsabilidad exclusiva del comprador. Los términos
				aquí expuestos pueden modificarse en cualquier momento sin previo aviso.
				La versión vigente de estos términos se encuentra siempre disponible en
				este sitio, y la única forma de asegurarse de conocer la información
				actualizada es consultando la fecha de la última actualización que se
				muestra al inicio de esta página.
			</p>
		</main>
	)
}
