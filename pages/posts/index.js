import AllPosts from '../../components/posts/all-posts';

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

const AllPostsPage = ({ posts }) => {
  return (
    <div>
      <AllPosts posts={DUMMY_POSTS} />
    </div>
  );
};

export default AllPostsPage;
