import type { LocaleSchema } from '../i18n';
import { legalEntity } from '../legal';

/** Identificación del responsable, común a los dos documentos legales. */
const responsable = `${legalEntity.fullName}, persona natural formalmente registrada como comerciante ante la Cámara de Comercio, identificado con NIT ${legalEntity.taxId}`;

const es: LocaleSchema = {
    nav: {
        home: 'Inicio',
        services: 'Servicios',
        projects: 'Proyectos',
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
    projects: {
        eyebrow: 'proyectos',
        title: 'Trabajo entregado',
        lead: 'Sitios en producción y cifras que cualquiera puede volver a medir.',
        ctaAll: 'Ver todos los proyectos',
        indexSlug: 'proyectos',
        visit: 'Visitar el sitio',
        metricsSource: 'Medido con PageSpeed Insights · julio 2026',
        testimonial: {
            label: 'lo que dice el cliente',
            quote:
                'Excelente trabajo realizado… todo muy profesional y eficiente. Lo recomiendo.',
            author: 'Joseph Caballero Lamadrid',
            source: 'Reseña en Google · julio 2026',
            sourceUrl: 'https://maps.app.goo.gl/st6sCh5rgCaqkSri7',
            note: '',
        },
        featured: {
            client: 'Recogras',
            tagline: 'Recolección certificada de aceite usado · Cartagena',
            summary:
                'Sitio corporativo para una gestora ambiental que recoge aceite de cocina usado y trampa grasa en restaurantes, hoteles y establecimientos gastronómicos. Construido con Astro y renderizado estático: sin capas de más, con el peso puesto en que abra rápido desde el móvil de un jefe de cocina.',
            url: 'https://recograscolombia.com/',
            urlLabel: 'recograscolombia.com',
            stack: ['Astro', 'Tailwind', 'CSS propio'],
            metrics: [
                { label: 'Rendimiento (escritorio)', value: '100' },
                { label: 'Rendimiento (móvil)', value: '98' },
                { label: 'SEO', value: '100' },
                { label: 'Accesibilidad', value: '96' },
            ],
        },
    },
    projectsPage: {
        metaTitle: 'Proyectos',
        metaDescription:
            'Lo que CTG Code tiene a bordo: sitios en producción, Helio (nuestro sistema de gestión para talleres), tres plantillas web y tres automatizaciones listas para adaptar.',
        eyebrow: 'bitácora de a bordo',
        title: 'Todo lo que llevamos a bordo',
        lead: 'Lo entregado, lo que se está construyendo y lo que ya está listo para adaptar. Sin maquetas de relleno: cada asiento dice en qué punto está.',
        manifest: [
            { idx: '01', label: 'Entregado', href: '#entregado' },
            { idx: '02', label: 'Producto propio', href: '#helio' },
            { idx: '03', label: 'Plantillas web', href: '#plantillas' },
            { idx: '04', label: 'Automatizaciones', href: '#automatizaciones' },
        ],
        labels: {
            status: 'estado',
            stack: 'stack',
            demo: 'Ver demo',
            demoSoon: 'demo en preparación',
            shotSoon: 'captura en camino',
            audience: 'pensada para',
            includes: 'incluye',
        },
        delivered: {
            idx: '01',
            eyebrow: 'entregado',
            title: 'En producción, con el cliente al mando',
            lead: 'El trabajo que ya vive fuera de nuestras manos: un sitio abierto al público, con cifras que cualquiera puede volver a medir.',
            status: 'entregado · en línea',
        },
        helio: {
            idx: '02',
            eyebrow: 'producto propio · en construcción',
            name: 'Helio',
            tagline: 'Gestión empresarial para talleres de servicio técnico',
            status: 'en desarrollo',
            summary:
                'Helio es el SaaS que estamos construyendo en casa. Nace de un problema que se repite en todo taller que crece: las entradas se anotan en un cuaderno, el inventario vive en la cabeza de alguien y nadie sabe con certeza qué se le hizo a un equipo hace seis meses. Helio junta las tres cosas en un solo sistema.',
            scope: 'Enfocado, de entrada, en talleres de servicio técnico: celulares, computadores, equipos electrónicos, vehículos, herramientas y maquinaria.',
            modules: [
                {
                    idx: 'i',
                    name: 'Empleados, roles y permisos',
                    body: 'Cada persona del taller entra con su propia cuenta y ve exactamente lo que le toca. Los roles definen quién recibe equipos, quién mueve inventario y quién cierra una orden.',
                },
                {
                    idx: 'ii',
                    name: 'Inventario de dos naturalezas',
                    body: 'Un almacén que entiende la diferencia entre lo que se consume y lo que vuelve: insumos que se descuentan al usarse y herramientas que se asignan, se prestan y se devuelven, con su responsable a la vista.',
                },
                {
                    idx: 'iii',
                    name: 'Trazabilidad y mantenimiento',
                    body: 'Cada equipo que entra al taller arrastra su historial: qué se le hizo, quién lo hizo y cuándo. Mantenimiento preventivo con su calendario y correctivo con su diagnóstico, en la misma línea de tiempo.',
                },
            ],
            stack: ['python', 'fastapi', 'rust', 'postgresql', 'astro', 'typescript'],
            note: 'Todavía no publicamos capturas ni demo: cuando Helio abra su puerta, se enlazará desde aquí.',
        },
        templates: {
            idx: '03',
            eyebrow: 'plantillas web',
            title: 'Tres puntos de partida, no tres plantillas de catálogo',
            lead: 'Bases construidas por nosotros para los tres encargos que más se repiten. Se adaptan a tu marca, tu contenido y tu manera de vender; no se rellenan con tu logo y ya.',
            items: [
                {
                    slug: 'servicios-profesionales',
                    kicker: 'plantilla 01',
                    name: 'Servicios profesionales',
                    body: 'Para quien vende criterio y confianza antes que producto. Estructura pensada para explicar el servicio con claridad, mostrar trayectoria y credenciales, y dejar el contacto siempre a un clic de distancia.',
                    audience: [
                        'Contadores',
                        'Abogados',
                        'Consultores',
                        'Asesores financieros',
                        'Arquitectos',
                    ],
                    demoUrl: '/plantilla-servicios-profesionales',
                },
                {
                    slug: 'negocios-locales',
                    kicker: 'plantilla 02',
                    name: 'Negocios locales',
                    body: 'Para el negocio que vive de que lo encuentren cerca. Ficha del local con horarios, ubicación y contacto directo por WhatsApp, carta o catálogo visual, y todo pensado para abrir rápido desde el móvil, en la calle y con mala señal.',
                    audience: [
                        'Restaurantes',
                        'Salones de belleza',
                        'Talleres',
                        'Tiendas',
                        'Gimnasios',
                    ],
                    demoUrl: '/plantilla-negocio-local',
                },
                {
                    slug: 'startups-productos',
                    kicker: 'plantilla 03',
                    name: 'Startups y productos',
                    body: 'Para lanzar algo que aún hay que explicar. Una landing que cuenta el problema antes que la funcionalidad, ordena planes y precios sin marear, y responde las objeciones típicas antes de pedir el registro.',
                    audience: [
                        'SaaS',
                        'Apps',
                        'Lanzamientos',
                        'Productos digitales',
                    ],
                    demoUrl: '/plantilla-producto-startup',
                },
            ],
        },
        automations: {
            idx: '04',
            eyebrow: 'automatizaciones',
            title: 'Piezas que ya funcionan y se montan sobre lo que tienes',
            lead: 'No son ideas: son módulos desarrollados por nosotros, listos para adaptar a tu operación e integrar con las herramientas que ya usas.',
            items: [
                {
                    slug: 'control-acceso',
                    code: 'ACC',
                    name: 'Control de acceso inteligente',
                    body: 'Quién entra, cuándo y a dónde, sin planilla en la portería. Funciona con tarjetas, con biometría o con ambas, y deja registro de cada entrada y salida.',
                    includes: [
                        'Tarjetas y/o biometría',
                        'Permisos por zona y horario',
                        'Registro de entradas y salidas',
                        'Reportes de asistencia',
                    ],
                    demoUrl: '',
                },
                {
                    slug: 'motor-reservas',
                    code: 'RES',
                    name: 'Motor de reservas por capacidad',
                    body: 'Reservas contra cupos reales: el sistema sabe cuántos lugares quedan y cierra cuando se agotan. Cuando el cupo se llena, quien llega tarde no se pierde — entra a lista de espera y sube solo si alguien cancela.',
                    includes: [
                        'Cupos por franja horaria',
                        'Lista de espera automática',
                        'Confirmaciones y recordatorios',
                        'Cancelaciones que liberan el cupo',
                    ],
                    demoUrl: '',
                },
                {
                    slug: 'alertas-facturacion',
                    code: 'FAC',
                    name: 'Sistema de alertas de facturación',
                    body: 'La cobranza deja de depender de que alguien se acuerde. El sistema vigila el estado de cada factura y avisa al cliente por correo y/o WhatsApp en cada punto del camino: próxima a vencer, vencida, en mora y pagada.',
                    includes: [
                        'Avisos por correo y/o WhatsApp',
                        'Cuatro estados: por vencer, vencida, en mora, paga',
                        'Calendario de avisos configurable',
                        'Historial de lo enviado a cada cliente',
                    ],
                    demoUrl: '',
                },
            ],
        },
        closing: {
            eyebrow: 'siguiente rumbo',
            title: '¿Alguno de estos se parece a lo tuyo?',
            body: 'Si ves aquí algo cercano a lo que necesitas, no hace falta empezar de cero: partimos de la pieza que ya existe y la ajustamos a tu operación. Y si lo tuyo no está en esta lista, también queremos oírlo.',
            cta: 'Cuéntanos tu proyecto',
        },
    },
    services: {
        eyebrow: 'servicios',
        title: 'Soluciones de ingeniería para escalar',
        lead: 'Desarrollo de software con arquitectura limpia, velocidad medida y enfoque en resultados de negocio.',
        ctaAll: 'Explorar catálogo completo de servicios',
        indexSlug: 'servicios',
        featured: {
            label: 'servicio insignia',
            title: 'Desarrollo de Software a la Medida',
            body: 'Diseñamos y construimos plataformas web complejas, paneles de administración y arquitecturas de software adaptadas a las necesidades exactas de tu negocio. Priorizamos el rendimiento extremo, la seguridad y la escalabilidad, entregando soluciones robustas sin capas innecesarias ni código de relleno.',
            stack: ['python', 'fastapi', 'postgresql', 'typescript', 'astro', 'rust'],
        },
        secondary: [
            {
                title: 'Desarrollo Web de Alto Rendimiento',
                body: 'Sitios corporativos y landing pages enfocadas en conversión y velocidad de carga instantánea. Optimizados al 100% en PageSpeed para destacar en buscadores, mejorar el posicionamiento SEO y ofrecer una experiencia de usuario fluida.',
                stack: ['astro', 'typescript', 'javascript', 'css', 'htmx', 'jinja'],
            },
            {
                title: 'Desarrollo e Integración de Automatizaciones',
                body: 'Conectamos tus herramientas de trabajo y automatizamos flujos operativos recurrentes. Desarrollamos integraciones a la medida e interfaces API eficientes para reducir tareas manuales, eliminar errores y optimizar tiempos de respuesta.',
                stack: ['python', 'fastapi', 'rest-api', 'postgresql'],
            },
        ],
        faq: {
            eyebrow: 'faq // servicios',
            title: 'Antes de escribirnos',
            items: [
                {
                    q: '¿Cuánto tiempo toma desarrollar un proyecto?',
                    a: 'El tiempo de desarrollo varía según la complejidad del alcance y la dinámica de trabajo. Factores como la definición de requerimientos, la integración de APIs y la disponibilidad de insumos (contenidos, accesos y feedback del cliente) determinan el cronograma final. Cada proyecto se entrega con un plan de trabajo claro e hitos definidos para garantizar avances continuos.',
                },
                {
                    q: '¿Cómo estiman los costos y qué modalidad de pago manejan?',
                    a: 'Cotizamos a precio cerrado basándonos en el alcance y requerimientos acordados. Ofrecemos modalidades de pago adaptables según la magnitud del proyecto, como esquema 50/50 o pagos divididos por hitos de entrega, asegurando transparencia sin sorpresas ni costos ocultos.',
                },
                {
                    q: '¿Qué tecnologías utilizan y cómo eligen el stack para un proyecto?',
                    a: 'Seleccionamos las herramientas según las necesidades del proyecto: Astro es nuestra preferencia para web (SSG/SSR), complementado con HTMX, Jinja2 o Laravel según el caso. En backend lidera Python (FastAPI, Django, Flask), potenciado con Rust para tareas de rendimiento crítico, además de Node.js y PHP. Manejamos bases de datos relacionales y NoSQL (PostgreSQL, MySQL, SQLite, MongoDB, Firebase), contenedores con Docker y desarrollo móvil, garantizando siempre una arquitectura limpia y eficiente.',
                },
                {
                    q: '¿Ofrecen soporte y garantía después del lanzamiento?',
                    a: 'Sí, todos nuestros proyectos incluyen 30 días de garantía post-entrega para corrección de errores o ajustes operativos sin costo adicional. Además, ofrecemos planes opcionales de mantenimiento preventivo, optimización continua y gestión de infraestructura en la nube.',
                },
                {
                    q: '¿Trabajan con clientes fuera de Cartagena o Colombia?',
                    a: 'Sí. Operamos de forma remota tanto a nivel nacional como internacional. Contamos con procesos de comunicación, gestión de proyectos e hitos de entrega optimizados para colaborar sin fricción con clientes de cualquier ubicación o zona horaria.',
                },
            ],
        },
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