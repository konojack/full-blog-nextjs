import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';

const DUMMY_POSTS = [
  {
    slug: 'slug',
    title: 'title',
    image: 'example-image.png',
    excerpt: 'Blablabla test test',
    date: '2022-12-31',
  },
  {
    slug: 'slug',
    title: 'title',
    image: 'example-image.png',
    excerpt: 'Blablabla test test',
    date: '2022-12-31',
  },
  {
    slug: 'slug',
    title: 'title',
    image: 'example-image.png',
    excerpt: 'Blablabla test test',
    date: '2022-12-31',
  },
  {
    slug: 'slug',
    title: 'title',
    image: 'example-image.png',
    excerpt: 'Blablabla test test',
    date: '2022-12-31',
  },
];
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
