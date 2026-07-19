import type { LocaleSchema } from '../i18n';
import { legalEntity } from '../legal';

/** Identificación del responsable, común a los dos documentos legales. */
const responsable = `${legalEntity.fullName}, persona natural formalmente registrada como comerciante ante la Cámara de Comercio, identificado con NIT ${legalEntity.taxId}`;

const es: LocaleSchema = {
    nav: {
        home: 'Inicio',
        services: 'Servicios',
        contact: 'Contacto',
        cta: 'Cotiza tu proyecto',
        openMenu: 'Abrir menú',
        closeMenu: 'Cerrar menú',
    },
    hero: {
        eyebrow: 'Estudio de software · Cartagena',
        title: 'Construyendo el futuro digital desde el Caribe',
        titlePre: 'Construyendo ',
        titleMark: 'el futuro digital ',
        titlePost: 'desde el Caribe',
        description: 'Desarrollo de software a la medida y soluciones web de alto rendimiento desde Cartagena para el mundo.',
        file: 'futuro.ts',
        code: [
            'import { sol, mar } from "@caribe/cartagena";',
            '',
            'const estudio = new CTGCode({',
            '  origen: [10.4236, -75.5518],',
            '  horaDorada: true,',
            '});',
            '',
            'export const futuro = estudio',
            '  .diseñar({ aMano: true })',
            '  .construir({ aMedida: true })',
            '  .desplegar("→ para el mundo");',
        ],
        statusBuilding: 'compilando…',
        statusReady: 'en línea',
        output: '→ 200 OK · futuro desplegado en 47ms',
        secondary: 'ver servicios',
        scroll: '$ scroll --navegar-con-nosotros',
        chipA: 'horaDorada: true',
        chipB: '// a mano, a medida',
    },
    about: {
        eyebrow: 'nuestros valores',
        title: 'Cuatro principios que\nguían nuestro trabajo',
        tag: 'carta de valores · esc. 1:1',
        portLabel: 'nuestro compromiso',
        commitment: {
            eyebrow: 'contigo',
            title: 'Tu éxito es nuestro puerto',
            body: 'Creemos que el software de calidad nace de estándares claros. Desarrollamos soluciones escalables con arquitectura sólida, transparencia y un enfoque en el rendimiento, acompañando a nuestros clientes desde la idea hasta el despliegue.',
            signature: '$ rumbo fijado → tu éxito',
        },
        values: [
            {
                bearing: '000°',
                tagline: 'el norte de la aguja',
                name: 'Confianza',
                body: 'No improvisamos. Desde el primer contacto, establecemos un alcance claro, plazos realistas y costos sin sorpresas. Cumplimos lo que prometemos.',
            },
            {
                bearing: '090°',
                tagline: 'por donde sale el sol',
                name: 'Excelencia',
                body: 'No nos conformamos con que «funcione». Cuidamos cada detalle: la experiencia de usuario, la eficiencia del código y la calidad del producto final.',
            },
            {
                bearing: '270°',
                tagline: 'rumbo a lo que viene',
                name: 'Innovación',
                body: 'Adoptamos tecnologías modernas con criterio. Usamos lo nuevo cuando aporta valor real, y lo probado cuando la estabilidad es lo que importa.',
            },
            {
                bearing: '180°',
                tagline: 'mar de fondo',
                name: 'Resiliencia',
                body: 'Los problemas técnicos o de negocio son parte del camino. Los enfrentamos de frente, con soluciones robustas que resisten el paso del tiempo y los cambios del mercado.',
            },
        ],
    },
    legal: {
        eyebrow: 'documento legal',
        updatedLabel: 'Última actualización',
        pendingNotice:
            'Documento en revisión: faltan por confirmar los datos de identificación del responsable.',
        privacy: {
            title: 'Política de Privacidad',
            summary:
                'Cómo CTG Code recopila, usa y protege tus datos personales conforme a la Ley 1581 de 2012 de la República de Colombia.',
            intro: `El presente sitio web CTG Code es operado por ${responsable} (en adelante, el «Responsable»). Nos tomamos muy en serio la privacidad y la protección de tus datos personales. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos la información de acuerdo con la Ley 1581 de 2012 y demás normas vigentes en la República de Colombia.`,
            sections: [
                {
                    heading: 'Información que Recopilamos y Finalidad',
                    items: [
                        {
                            term: 'Datos del Formulario de Contacto',
                            text: 'Al diligenciar nuestro formulario, recopilamos datos como tu nombre, correo electrónico y los detalles del mensaje o proyecto que nos describes. La finalidad de estos datos es exclusivamente comercial: gestionar tu solicitud, ponernos en contacto contigo y enviarte las cotizaciones o información de servicios solicitada.',
                        },
                        {
                            term: 'Datos de Navegación y Cookies',
                            text: 'Mediante herramientas de analítica, recopilamos información anónima sobre tu comportamiento en el sitio (páginas visitadas, tiempo de permanencia, país de origen) con la única finalidad de optimizar la experiencia de usuario y medir el rendimiento de nuestras campañas.',
                        },
                    ],
                },
                {
                    heading: 'Uso de Proveedores y Transferencia de Datos',
                    body: 'Para garantizar un servicio seguro y de alto estándar, trabajamos con plataformas consolidadas. Tus datos pueden ser procesados a través de:',
                    items: [
                        {
                            term: 'Formspree',
                            text: 'Los datos del formulario de contacto se transmiten de forma segura a través de su plataforma con el único fin de hacerlos llegar a nuestro correo electrónico de atención.',
                        },
                        {
                            term: 'Google Analytics y Google Ads',
                            text: 'Herramientas que utilizamos bajo estrictos parámetros de seguridad para medir el tráfico y gestionar la publicidad del sitio web.',
                        },
                    ],
                },
                {
                    heading: 'Consentimiento y Cookies (Google Consent Mode v2)',
                    body: 'Este sitio web respeta rigurosamente tus decisiones de privacidad mediante la implementación de Google Consent Mode v2. Por defecto, todo rastreo analítico y publicitario está completamente denegado. Solo recolectaremos y procesaremos tus datos de navegación si decides otorgar tu consentimiento explícito a través de nuestro banner flotante de cookies. Puedes revocar este permiso en cualquier momento borrando las cookies de tu navegador.',
                },
                {
                    heading: 'Derechos del Titular (Habeas Data)',
                    body: `Como titular de los datos personales, tienes derecho a conocer, actualizar, rectificar y solicitar la supresión de tus datos de nuestras bases de datos en cualquier momento. Para ejercer estos derechos, o ante cualquier duda sobre esta política, puedes comunicarte directamente con el Responsable enviando un correo electrónico a: ${legalEntity.email}.`,
                },
            ],
        },
        terms: {
            title: 'Términos y Condiciones de Uso',
            summary:
                'Condiciones de uso del sitio y de los servicios de desarrollo de CTG Code: propiedad intelectual, licenciamiento, responsabilidad y jurisdicción.',
            intro: `Bienvenido al sitio web de CTG Code. Este sitio web y los servicios de desarrollo de software relacionados son operados por ${responsable}. Al acceder a este sitio o contratar nuestros servicios, aceptas cumplir y estar sujeto a los siguientes términos y condiciones. Si no estás de acuerdo con alguna parte, por favor no utilices este sitio ni adquieras nuestros servicios.`,
            sections: [
                {
                    heading: 'Propiedad Intelectual y Licenciamiento de Software',
                    items: [
                        {
                            term: 'Propiedad de CTG Code',
                            text: `Todo el contenido, diseño de interfaz, código fuente base, herramientas, marcas y gráficos propios expuestos en este sitio web o integrados en nuestras soluciones son propiedad exclusiva de CTG Code (propiedad de ${legalEntity.fullName}).`,
                        },
                        {
                            term: 'Entregas a Clientes',
                            text: 'El código fuente, automatización o software desarrollado para un cliente pertenece a CTG Code, a menos que se negocie y formalice explícitamente la transferencia total de los derechos patrimoniales mediante el pago del valor correspondiente especificado en el contrato.',
                        },
                        {
                            term: 'Licencia de Uso',
                            text: 'Hasta que no se realice dicha transferencia, el cliente recibe una licencia de uso interna, no exclusiva y permanente. Esta copia del código se entrega exclusivamente para fines de operación interna del cliente.',
                        },
                        {
                            term: 'Libertad de Mantenimiento',
                            text: 'Esta licencia otorga expresamente al cliente la libertad de contratar a terceros para realizar nuevas funciones, modificaciones o tareas de mantenimiento sobre el software entregado; en ningún caso condicionamos o forzamos al cliente a trabajar exclusivamente con nosotros para la evolución de su plataforma.',
                        },
                    ],
                },
                {
                    heading: 'Responsabilidad por Filtraciones y Custodia de Código',
                    items: [
                        {
                            text: 'Cualquier filtración, copia no autorizada o exposición de un código que nosotros no hayamos publicado de forma abierta (como repositorios privados de GitHub o librerías propietarias) será responsabilidad exclusiva del cliente una vez que el software haya sido entregado.',
                        },
                        {
                            text: 'Si la filtración o mal uso del código es ocasionado por el personal externo o los terceros que el cliente decida contratar para mantenimiento o actualizaciones, la responsabilidad legal ante CTG Code seguirá siendo del cliente, quedando a su entera discreción realizar las acciones de repetición legales correspondientes contra dicho tercero.',
                        },
                        {
                            text: 'Queda terminantemente prohibido realizar ingeniería inversa, hackear, o hacer cualquier tipo de uso malicioso o ilícito de cualquier software entregado por nosotros.',
                        },
                    ],
                },
                {
                    heading: 'Uso de Proveedores y Limitación de Responsabilidad Técnica',
                    items: [
                        {
                            term: 'Compromiso de Calidad',
                            text: 'Nos comprometemos formalmente a construir e implementar nuestras soluciones utilizando proveedores de infraestructura y servicios serios, consolidados y de alto estándar a nivel mundial (tales como Google, GitHub, Formspree, Hostinger, entre otros), con el único objetivo de disminuir al máximo cualquier riesgo de fallo en el servicio o vulnerabilidad de seguridad.',
                        },
                        {
                            term: 'Fallas Fuera de Control',
                            text: 'Debido a la naturaleza del software, CTG Code no se hace responsable legal ni económicamente por fallas de servicio, caídas de servidor, problemas de conectividad o brechas de seguridad que dependan directamente de estos terceros proveedores. Trataremos siempre de brindar soporte y buscar una solución a todo cuanto esté bajo nuestro control técnico directo; sin embargo, si la solución no es posible por fallas del proveedor, el cliente entiende y acepta que está fuera de nuestro alcance.',
                        },
                        {
                            term: 'Migraciones',
                            text: 'En caso de que el cliente decida migrar sus sistemas, bases de datos o infraestructura hacia otros servidores o tecnologías, dicho trabajo de consultoría, exportación y despliegue se cotizará y cobrará de forma totalmente independiente.',
                        },
                    ],
                },
                {
                    heading: 'Ley Aplicable y Jurisdicción',
                    body: 'Estos términos se rigen e interpretan bajo las leyes de la República de Colombia. Cualquier disputa, reclamación o controversia derivada del uso de este sitio web o de la ejecución de nuestros servicios de desarrollo será sometida a la jurisdicción exclusiva de los tribunales de la ciudad de Cartagena, Colombia.',
                },
            ],
        },
    },
    notFound: {
        status: 'error 404 · ruta no encontrada',
        title: 'Esta página se hundió con el atardecer',
        lead: 'El mar se la llevó — o quizá nunca existió. El faro sigue encendido para guiarte de vuelta a puerto.',
        cta: 'Volver a puerto',
        coords: 'puerto seguro → 10.4236° N, 75.5518° W · Cartagena de Indias',
    },
    langNotice: {
        message: 'Esta página también está disponible en español.',
        action: 'Ver en español',
        dismiss: 'Cerrar aviso',
    },
    cookies: {
        message: 'Usamos cookies para medir el tráfico y mejorar el sitio. Nada se activa hasta que decidas.',
        accept: 'Aceptar',
        reject: 'Rechazar',
    },
    footer: {
        eyebrow: 'estudio de software · cartagena de indias',
        claim: '¿Zarpamos?',
        lead: 'Cuéntanos qué quieres construir y fijamos el rumbo.',
        surface: 'volver a la superficie',
        colophon: '$ hecho a mano frente al mar · 10.4236° N, 75.5518° W',
        rights: 'todos los derechos reservados',
        nav: 'navegación',
        legal: 'legal',
        channels: 'canales',
        privacy: 'Política de privacidad',
        privacySlug: 'privacidad',
        terms: 'Términos y condiciones',
        termsSlug: 'terminos',
        email: 'Correo',
        form: {
            name: 'nombre',
            namePlaceholder: '¿Cómo te llamamos?',
            email: 'correo',
            emailPlaceholder: 'tu@correo.com',
            message: 'tu idea',
            messagePlaceholder: 'Una web, una app, una integración…',
            cta: 'Enviar',
        },
        success: '¡Rumbo fijado!',
        messageSent: 'Hemos recibido tu idea. Nos pondremos en contacto contigo tan pronto como nos sea posible.',
        error: 'Algo salió mal',
        messageError: 'Lo sentimos, hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde o contáctanos directamente a través de nuestros canales.',
        formReset: 'Enviar otro mensaje',
    }
};

export default es;