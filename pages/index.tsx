import Layout from '@/components/Layout';

import PostList from '@/components/posts/PostList';

import { fetchCategories, fetchPosts } from '@/lib/posts';
import Meta from '@/components/Meta';

const Home = ({ posts, categories }) => {
  return (
    <Layout categories={categories}>
      <Meta
        title="Joe's Blog"
        description="Personal blog of József Sallai. I write about technology and stuff."
        image="/images/social.png"
        url="/"
        noAppendBlogName={true}
      />

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
