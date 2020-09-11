import styles from '@/components/posts/Post.module.scss';

import Layout from '@/components/Layout';
import Meta from '@/components/Meta';

const ServerErrorPage = () => {
  return (
    <>
      <Meta
        title="500"
        description="Internal Server Error."
        url=""
      />

      <Layout>
        <main>
          <article className={styles.post}>
            <h2 className={styles.title}>Ow...</h2>
            <section className={styles.postContent}>
              <p>
                The server is experiencing some issues trying to display the
                requested page. If the issue persists, please <a
                  href="https://github.com/jozsefsallai/blog/issues/new"
                  target="_blank"
                  rel="noreferrer noopener"
                >create an issue on GitHub</a>.
              </p>
            </section>
          </article>
        </main>
      </Layout>
    </>
  );
};

export default ServerErrorPage;
