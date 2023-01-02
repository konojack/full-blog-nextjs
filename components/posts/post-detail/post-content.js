import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import classes from './post-content.module.css';
import PostHeader from './post-header';

const PostContent = ({ postData }) => {
  const imagePath = `/images/posts/${postData.slug}/${postData.image}`;

  const customRenderers = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${postData.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },

    code(code) {
      console.log(code);
      return (
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {code.node.children[0].value}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article class={classes.content}>
      <PostHeader image={imagePath} title={postData.title} />
      <ReactMarkdown components={customRenderers}>
        {postData.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
