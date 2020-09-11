import Layout from '@/components/Layout';
import Meta from '@/components/Meta';
import PostList from '@/components/posts/PostList';

import { fetchCategories, fetchPosts } from '@/lib/posts';

const Category = ({ category, posts, categories }) => {
  return (
    <Layout categories={categories}>
      <Meta
        title={category}
        description={`Posts about ${category} on József Sallai's blog.`}
        url={`/categories/${category}`}
      />

      <main>
        <PostList posts={posts} />
      </main>
    </Layout>
  );
};

export const getStaticProps = async ctx => {
  const category = ctx.params.category;
  const posts = fetchPosts({ category });
  const categories = fetchCategories();

  return {
    props: {
      category,
      posts,
      categories
    }
  };
};

export const getStaticPaths = async ctx => {
  const categories = fetchCategories();

  return {
    paths: categories.map(category => {
      return {
        params: {
          category
        }
      };
    }),
    fallback: false
  };
};

export default Category;
