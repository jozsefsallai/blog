# Joe's Blog

https://blog.sallai.me

## Project Description

This is a simple blog application written in [Next.js][1]. It takes advantage of
features such as static-site generation and server-side rendering, all while
enjoying the benefits of React and its ecosystem. The blog deploys to
[Vercel](https://vercel.com).

## Quick Setup

```sh
git clone git@github.com:jozsefsallai/blog.git
cd blog
npm i
npm run dev
```

To create a post you can use the helper script:

```sh
npm run create
```

### Note

It is recommended that you create a `.env` file with the following contents:

```
PROTOCOL=http
DOMAIN=localhost
PORT=3000
```

## License

MIT. You may feel free to use parts of this blog to make your own. [Next.js][1]
is an open-source project.

[1]: https://nextjs.org
