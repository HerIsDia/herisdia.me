import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    heroImage: z.string().optional(),
    buttons: z.array(z.object({
      label: z.string(),
      href: z.string(),
    })).optional(),
    authors: z.array(z.string()).optional(),
    lang: z.string().optional(),
    imageCredit: z.string().optional(),
  }),
});

export const collections = { blog };