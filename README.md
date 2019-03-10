# Joe's Blog

https://blog.sallai.me

## Quick Setup

```sh
git clone git@github.com:jozsefsallai/blog
cd blog
npm i -g yarn
yarn
cd themes/sallai  # will be further improved later on
yarn
cd ../..
yarn generate
```

For serving you may either create a virtual host that points to the `/public/` directory or just run `yarn serve`.

For everyday development, running `yarn watch` and `yarn generate:dry` in separate tabs is recommended.

To add content, you must have Hexo installed:

```
npm i -g hexo
```

More info about the usage on the [Hexo Documentation Page](https://hexo.io/docs/writing).

## License

All rights reserved. [Hexo](https://hexo.io) is an open-source project.
