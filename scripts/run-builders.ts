import { OGImageBuilder } from './builders/og-base';
import { buildHomeOG } from './builders/home-og';
import { buildLegalOG } from './builders/legal-og';
import { buildNotFoundOG } from './builders/not-found-og';

async function main() {
    console.log('[i] Iniciando generación de imágenes OG...');

    const builder = new OGImageBuilder();

    try {
        await builder.initialize();

        await buildHomeOG(builder);
        await buildLegalOG(builder);
        await buildNotFoundOG(builder);

        console.log('[✓] Todas las imágenes OG generadas exitosamente');
    } catch (error) {
        console.error('[!] Error durante la ejecución de los builders:', error);
        process.exit(1);
    } finally {
        await builder.close();
    }
}

main();
