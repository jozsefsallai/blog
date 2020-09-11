import Layout from '@/components/Layout';
import Meta from '@/components/Meta';
import PostList from '@/components/posts/PostList';

import { fetchCategories, fetchPosts, fetchTags } from '@/lib/posts';

const Tag = ({ tag, posts, categories }) => {
  return (
    <Layout categories={categories}>
      <Meta
        title={tag}
        description={`Posts tagged as "${tag}" on József Sallai's blog.`}
        url={`/tags/${tag}`}
      />

      <main>
        <PostList posts={posts} />
      </main>
    </Layout>
  );
};

export const getStaticProps = async ctx => {
  const tag = ctx.params.tag;
  const posts = fetchPosts({ tag });
  const categories = fetchCategories();

  return {
    props: {
      tag,
      posts,
      categories
    }
  };
};

export const getStaticPaths = async ctx => {
  const tags = fetchTags();

  return {
    paths: tags.map(tag => {
      return {
        params: {
          tag
        }
      };
    }),
    fallback: false
  };
};

export default Tag;
