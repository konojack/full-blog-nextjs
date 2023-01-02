import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../utils/posts-util';

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

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      featuredPosts,
    },
    revalidate: 1800,
  };
};

export default function HomePage({ featuredPosts }) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
}
