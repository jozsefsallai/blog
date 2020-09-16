import '@/styles/base.scss';
import Head from 'next/head';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { useEffect, useState } from 'react';
import Router from 'next/router';
import TopIndicator from '@/components/indicators/TopIndicator';

config.autoAddCss = false;

const Blog = ({ Component, pageProps }) => {
  const [loadingProgress, setLoadingProgress] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let interval = null;

    const finish = () => {
      clearInterval(interval);
      setLoadingProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setLoadingProgress(5);
      }, 100);
    }

    Router.events.on('routeChangeStart', () => {
      clearInterval(interval);
      setIsLoading(false);
      setLoadingProgress(5);
      setIsLoading(true);

      interval = setInterval(() => {
        setLoadingProgress(current => {
          if (current > 90) {
            return current;
          }

          return current + 0.5;
        });
      }, 200);
    });

    Router.events.on('routeChangeComplete', finish);
    Router.events.on('routeChangeError', finish);

    return finish;
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
        <meta httpEquiv="Cache-control" content="public" />
      </Head>

      <Component {...pageProps} />
      {isLoading && <TopIndicator width={`${loadingProgress}%`} />}
    </>
  );
};

export default Blog;
