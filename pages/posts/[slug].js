import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../utils/posts-util';

export const getStaticProps = context => {
  const postData = getPostData(context.params.slug);

  return {
    props: {
      postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const allPosts = getPostsFiles();

  return {
    paths: allPosts.map(post => ({
      params: { slug: post.replace(/\.md$/, '') },
    })),
    fallback: false,
  };
};

const PostDetailPage = ({ postData }) => {
  return <PostContent postData={postData} />;
};

export default PostDetailPage;
