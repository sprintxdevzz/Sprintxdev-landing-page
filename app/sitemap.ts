import type { MetadataRoute } from 'next';

const BASE = 'https://www.nxtaut.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
  ];
}
