import Document, { Html, Head, Main, NextScript } from 'next/document';

class SallaiBlog extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className="light-mode">
        <Head>
          <script src="/theme.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default SallaiBlog;
