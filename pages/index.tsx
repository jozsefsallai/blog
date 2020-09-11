import Layout from '@/components/Layout';

import PostList from '@/components/posts/PostList';

import { fetchCategories, fetchPosts } from '@/lib/posts';

const Home = ({ posts, categories }) => {
  return (
    <Layout categories={categories}>
      <main>
        <PostList posts={posts} />
      </main>
    </Layout>
  );
};

export const getStaticProps = async ctx => {
  const posts = fetchPosts();
  const categories = fetchCategories(posts);

  return {
    props: {
      posts,
      categories
    }
  };
};

export default Home;
