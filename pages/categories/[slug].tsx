import Layout from '@/components/Layout';
import Meta from '@/components/Meta';
import PostList from '@/components/posts/PostList';

import { fetchCategories, fetchPosts } from '@/lib/posts';

const Category = ({ slug, category, posts, categories }) => {
  return (
    <Layout categories={categories}>
      <Meta
        title={category}
        description={`Posts about ${category} on József Sallai's blog.`}
        url={`/categories/${slug}`}
      />

      <main>
        <PostList posts={posts} />
      </main>
    </Layout>
  );
};

export const getStaticProps = async ctx => {
  const categories = fetchCategories();
  const slug = ctx.params.slug;
  const { category } = categories.find(c => c.slug === slug);
  const posts = fetchPosts({ category });

  return {
    props: {
      category,
      slug,
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
          slug: category.slug
        }
      };
    }),
    fallback: false
  };
};

export default Category;
