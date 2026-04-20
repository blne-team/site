import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const seoSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  canonicalURL: z.string().url().optional(),
  ogImage: z.string().optional(),
  keywords: z.array(z.string()).optional(),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: seoSchema,
});

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: seoSchema.extend({
    publishDate: z.coerce.date(),
    image: z.string().optional(),
    category: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: seoSchema.extend({
    publishDate: z.coerce.date(),
    excerpt: z.string().optional(),
  }),
});

export const collections = {
  pages,
  products,
  news,
};
