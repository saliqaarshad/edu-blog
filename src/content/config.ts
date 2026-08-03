import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content', // Markdown/MDX content
  schema: z.object({
    title: z.string(),
    author: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    focusKeyword: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featuredImage: z.string().optional(),
    featuredImageAlt: z.string().optional(),
    ogImage: z.string().optional(),
    twitterCard: z.string().optional().default('summary_large_image'),
    canonicalUrl: z.string().optional(),
    noindex: z.boolean().optional().default(false),
    hreflang: z.string().optional(),
    ctaHeading: z.string().optional(),
    ctaText: z.string().optional(),
    ctaButtonLabel: z.string().optional(),
    ctaButtonUrl: z.string().optional(),
    seoScore: z.number().optional().default(100),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional().default([])
  })
});

export const collections = {
  posts: postsCollection,
};
