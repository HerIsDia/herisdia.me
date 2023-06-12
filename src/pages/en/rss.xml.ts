import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get() {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  ).filter(
    (post) => (post.slug.startsWith('en/')))
  return rss({
    title: 'Diamant\'s Writings.',
    description: 'The english writings of diamant.',
    site: 'https://herisdia.me/en/',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/read/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}