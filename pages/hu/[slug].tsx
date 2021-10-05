import Layout from '@/components/Layout';
import Meta from '@/components/Meta';

import { fetchCategories, fetchPost, fetchPosts, IPost } from '@/lib/posts';

import Post from '@/components/posts/Post';
import Sharebox from '@/components/sharebox/Sharebox';
import ReadingPositionIndicator from '@/components/indicators/ReadingPositionIndicator';

import React from 'react';

const PostPage = ({ post, categories }: { post: IPost; categories: string[] }) => {
  const article = React.createRef<HTMLDivElement>();

  return (
    <Layout categories={categories}>
      <Meta
        title={post.title}
        description={post.description}
        image={require(`../../posts/images/${post.image.replace('images/', '')}`)}
        url={post.slug}
      />

      <main>
        <ReadingPositionIndicator target={article} />

        <div ref={article}>
          <Post post={post} />
          <Sharebox url={post.slug} title={post.title} />
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps = async ctx => {
  const slug = ctx.params.slug;
  const post = fetchPost(slug, true);
  const categories = fetchCategories();

  return {
    props: {
      post,
      categories
    }
  };
};

export const getStaticPaths = async ctx => {
  const posts = fetchPosts({ hungarian: true });

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
};

export default PostPage;
