import '@/styles/base.scss';
import Head from 'next/head';

import buildUrl from '@/lib/buildUrl';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const Blog = ({ Component, pageProps }) => {
  const title = 'Joe\'s Blog';
  const description = 'Personal blog of József Sallai. I write about technology and stuff.';
  const image = buildUrl('/images/social.png');

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link rel="image_src" href={image} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content={title} />
        <meta property="og:url" content={buildUrl()} />
        <link rel="icon" href="/images/favicon.png" />
        <meta httpEquiv="Cache-control" content="public" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default Blog;
