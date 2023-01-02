import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../utils/posts-util';

export const getStaticProps = () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
};

const AllPostsPage = ({ posts }) => {
  return (
    <div>
      <AllPosts posts={posts} />
    </div>
  );
};

export default AllPostsPage;
