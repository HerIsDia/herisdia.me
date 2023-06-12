import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get() {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  ).filter(
    (post) => (post.slug.startsWith('fr/')))
  return rss({
    title: 'Les écrits de diamant.',
    description: 'Les textes français de diamant.',
    site: 'https://herisdia.me/fr/',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/read/${post.slug}/`,
    })),
    customData: `<language>fr-fr</language>`,
  });
}