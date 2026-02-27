/**
 * Astra Universal Slug Generator
 * Matches exactly with Synthesizer v8.3 and Linker v4 logic.
 */
export function generateSlug(keyword) {
  if (!keyword) return '';
  
  return keyword
    .toString()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s-]/g, '') // Remove special chars
    .trim()
    .replace(/[\s-]+/g, '-');        // Replace spaces/hyphens with single hyphen
}
