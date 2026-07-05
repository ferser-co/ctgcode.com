import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pageName: z.string(),
        locale: z.enum(['es', 'en']).default('es'),
        ogImage: z.string().optional(),
    }),
});

export const collections = {
    pages,
};
