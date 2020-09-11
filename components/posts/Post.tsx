import styles from './Post.module.scss';

import Link from 'next/link';
import MarkdownImage from '../renderers/MarkdownImage';
import Tags from '../tags/Tags';
import Categories from '../categories/Category';
import PostContent from './PostContent';
import Twemoji from 'react-twemoji';

import { IPost } from '@/lib/posts';

import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faFolderOpen, faClock } from '@fortawesome/free-regular-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';

export interface PostOpts {
  post: IPost;
  list?: boolean;
}

const PostLink = (props) => {
  return (
    <Link href="/[slug]" as={`/${props.slug}`}>
      <a className={props.className}>
        {props.children}
      </a>
    </Link>
  );
};

const Post = ({ post, list }: PostOpts) => {
  const readingTime = post.content && Math.ceil(post.content.split(' ').length / 200);

  return (
    <article className={styles.post}>
      {list && (
        <h2 className={styles.title}>
          <PostLink slug={post.slug}>
            <Twemoji options={{ className: 'twemoji' }}>
              {post.title}
            </Twemoji>
          </PostLink>
        </h2>
      )}

      {!list && (
        <>
          <h2 className={styles.title}>
            <Twemoji options={{ className: 'twemoji' }}>
              {post.title}
            </Twemoji>
          </h2>

          <div className={styles.readingTime}>
            <FontAwesomeIcon icon={faClock} />
            <strong>Reading time: </strong>
            <span>{readingTime === 1 ? '1 minute' : `${readingTime} minutes`}</span>
          </div>
        </>
      )}

      {list && post.image?.length && (
        <figure className={styles.postImage}>
          <PostLink slug={post.slug}>
            <MarkdownImage src={post.image} alt={post.title} />
          </PostLink>
        </figure>
      )}

      {!list && post.image?.length && (
        <figure className={styles.postImage}>
          <MarkdownImage src={post.image} alt={post.title} />
        </figure>
      )}

      <section className={styles.postContent}>
        {list && <p>{post.description}</p>}
        {!list && <PostContent content={post.content} />}
      </section>

      {list && (
        <div className={styles.readMore}>
          <PostLink slug={post.slug}>Read More</PostLink>
        </div>
      )}

      <div className={styles.meta}>
        <span>
          <FontAwesomeIcon icon={faCalendarAlt} />
          {format(new Date(post.date), 'MMMM dd, yyyy')}
        </span>

        <span>
          <FontAwesomeIcon icon={faFolderOpen} />
          <Categories categories={post.categories} />
        </span>

        <span>
          <FontAwesomeIcon icon={faTags} />
          <Tags tags={post.tags} />
        </span>
      </div>
    </article>
  );
};

export default Post;
