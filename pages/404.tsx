import styles from '@/components/posts/Post.module.scss';

import Layout from '@/components/Layout';
import Meta from '@/components/Meta';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <>
      <Meta
        title="404"
        description="Page not found."
        url=""
      />

      <Layout>
        <main>
          <article className={styles.post}>
            <h2 className={styles.title}>Uh-oh!</h2>
            <section className={styles.postContent}>
              <p>
                The requested page could not be found! Perhaps
                try <Link href="/"><a>going back to the home page</a></Link>.
              </p>
            </section>
          </article>
        </main>
      </Layout>
    </>
  );
};

export default NotFoundPage;
