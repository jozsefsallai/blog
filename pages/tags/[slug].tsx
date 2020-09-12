import Layout from '@/components/Layout';
import Meta from '@/components/Meta';
import PostList from '@/components/posts/PostList';

import { fetchCategories, fetchPosts, fetchTags } from '@/lib/posts';

const Tag = ({ slug, tag, posts, categories }) => {
  return (
    <Layout categories={categories}>
      <Meta
        title={tag}
        description={`Posts tagged as "${tag}" on József Sallai's blog.`}
        url={`/tags/${slug}`}
      />

      <main>
        <PostList posts={posts} />
      </main>
    </Layout>
  );
};

export const getStaticProps = async ctx => {
  const categories = fetchCategories();
  const tags = fetchTags();
  const slug = ctx.params.slug;
  const { tag } = tags.find(t => t.slug === slug);
  const posts = fetchPosts({ tag });

  return {
    props: {
      tag,
      slug,
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
          slug: tag.slug
        }
      };
    }),
    fallback: false
  };
};

export default Tag;
