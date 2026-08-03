export interface Heading {
  depth: number;
  text: string;
  slug: string;
}

/**
 * Strips markdown symbols and counts words in a text string.
 */
export function countWords(content: string): number {
  if (!content) return 0;
  // Strip code blocks
  let text = content.replace(/```[\s\S]*?```/g, '');
  // Strip HTML tags
  text = text.replace(/<[^>]*>/g, '');
  // Strip markdown frontmatter if any remains
  text = text.replace(/^---[\s\S]*?---/g, '');
  // Match word characters
  const words = text.match(/\b[-a-zA-Z0-9']+\b/g);
  return words ? words.length : 0;
}

/**
 * Calculates reading time based on an average speed of 200 words per minute.
 */
export function getReadingTime(content: string): number {
  const words = countWords(content);
  return Math.max(1, Math.ceil(words / 200));
}

/**
 * Automatically extracts headings (H2 and H3) from Markdown body text.
 */
export function extractHeadings(content: string): Heading[] {
  if (!content) return [];
  
  const lines = content.split('\n');
  const headings: Heading[] = [];
  
  // Track slugs to ensure uniqueness if necessary
  const slugCounts: Record<string, number> = {};

  for (const line of lines) {
    // Only match h2 (## ) and h3 (### )
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const hashes = match[1];
      const text = match[2].trim().replace(/[*_`]/g, ''); // Strip emphasis tags
      const depth = hashes.length;
      
      // Generate standard URL slug
      let slug = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric chars
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-'); // Deduplicate hyphens
        
      if (slugCounts[slug] !== undefined) {
        slugCounts[slug]++;
        slug = `${slug}-${slugCounts[slug]}`;
      } else {
        slugCounts[slug] = 0;
      }
      
      headings.push({ depth, text, slug });
    }
  }
  
  return headings;
}
