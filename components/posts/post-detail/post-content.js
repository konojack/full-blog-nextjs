import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import classes from './post-content.module.css';
import PostHeader from './post-header';

const PostContent = ({ postData }) => {
  const imagePath = `/images/posts/${postData.slug}/${postData.image}`;
  return (
    <article class={classes.content}>
      <PostHeader image={imagePath} title={postData.title} />
      <ReactMarkdown>{postData.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
