import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import classes from './post-content.module.css';
import PostHeader from './post-header';

const DUMMY_POST = {
  slug: 'slug',
  title: 'title',
  image: 'example-image.png',
  content: '# This is a first post',
  date: '2022-12-31',
};

const PostContent = () => {
  const imagePath = `/image/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article class={classes.content}>
      <PostHeader image={imagePath} title={DUMMY_POST.title} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
