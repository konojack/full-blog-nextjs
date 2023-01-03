import Head from 'next/head';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../utils/posts-util';

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
      <Head>
        <title>David's Blog</title>
        <meta
          name="description"
          content="I post about programming and a web dev"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
}
