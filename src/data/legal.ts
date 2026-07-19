/**
 * Datos del responsable legal. Los consumen la Política de Privacidad y los
 * Términos y Condiciones en los dos idiomas, así que se editan UNA sola vez
 * aquí y se propagan a los cuatro documentos.
 *
 * Si alguno de los datos de identificación vuelve a quedar sin confirmar,
 * basta con anteponerle «⚠️» a su valor: `legalDataPending` lo detecta, las
 * páginas legales muestran el aviso de documento en revisión y el Layout las
 * saca del índice hasta que el dato real esté puesto.
 */
export const legalEntity = {
  /** Nombre legal completo de la persona natural responsable. */
  fullName: 'FRANKLIN DAVID SERRANO MONTES',
  /**
   * NIT con su dígito de verificación (formato 00000000-0). Para una persona
   * natural registrada como comerciante el NIT ES la cédula más el dígito de
   * verificación, así que no se declara la cédula por separado: sería el
   * mismo dato dos veces.
   */
  taxId: '1007976195-2',

  /** Correo para ejercer derechos y consultas legales (dato real y público). */
  email: 'contacto@ctgcode.com',

  /** Fecha de última revisión de los documentos. */
  updated: {
    es: 'Julio 2026',
    en: 'July 2026',
  },
} as const;

/**
 * `true` mientras queden marcadores sin rellenar. El Layout lo usa para
 * mantener las páginas legales fuera del índice de Google (contenido
 * incompleto) y el sitemap para no listarlas todavía.
 */
export const legalDataPending: boolean =
  legalEntity.fullName.startsWith('⚠️') || legalEntity.taxId.startsWith('⚠️');
