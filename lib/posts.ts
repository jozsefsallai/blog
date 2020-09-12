import matter from 'gray-matter';
import * as fs from 'fs';
import * as path from 'path';
import slugify from '@sindresorhus/slugify';

const POSTS_PATH = path.join(process.cwd(), 'posts');

interface RawPostData {
  title: string;
  description: string;
  date: string;
  tags: string[];
  categories: string[];
  image?: string;
}

export interface IPost extends RawPostData {
  slug: string;
  content?: string;
}

export interface IPostFetchOptions {
  category?: string;
  fetchAll?: boolean;
  page?: number;
  tag?: string;
}

export interface ICategory {
  category: string;
  slug: string;
}

export interface ITag {
  tag: string;
  slug: string;
}

const fetchPosts = (opts: IPostFetchOptions = undefined): IPost[] => {
  const posts: IPost[] = fs.readdirSync(POSTS_PATH)
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const raw = fs.readFileSync(path.join(POSTS_PATH, file), { encoding: 'utf8' });

      const frontmatter = matter(raw);
      const data: RawPostData = frontmatter.data as RawPostData;

      const slug = file.replace('.md', '');

      return {
        ...data,
        slug
      };
    });

  let finalPosts: IPost[] = posts;

  if (opts && opts.category) {
    finalPosts = posts.filter(post => post.categories.includes(opts.category));
  }

  if (opts && opts.tag) {
    finalPosts = posts.filter(post => post.tags.includes(opts.tag));
  }

  const page = opts?.page || 0;

  finalPosts = finalPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (opts && opts.fetchAll) {
    return finalPosts;
  }

  return finalPosts.slice(page, page + 10);
};

const fetchPost = (slug: string): IPost | null => {
  const postPath = path.join(POSTS_PATH, `${slug}.md`);

  if (!fs.existsSync(postPath)) {
    return null;
  }

  const raw = fs.readFileSync(postPath, { encoding: 'utf8' });

  const frontmatter = matter(raw);
  const data: RawPostData = frontmatter.data as RawPostData;
  const content: string = frontmatter.content;

  return {
    ...data,
    slug,
    content
  };
};

const fetchCategories = (posts: IPost[] | null = null): ICategory[] => {
  if (!posts) {
    posts = fetchPosts({ fetchAll: true });
  }

  const categories = [];

  posts.forEach(post => {
    categories.push(...post.categories);
  });

  const set = new Set(categories);
  return Array.from(set).map(category => {
    return {
      slug: slugify(category),
      category
    };
  });
};

const fetchTags = (posts: IPost[] | null = null): ITag[] => {
  if (!posts) {
    posts = fetchPosts({ fetchAll: true });
  }

  const tags = [];

  posts.forEach(post => {
    tags.push(...post.tags);
  });

  const set = new Set(tags);
  return Array.from(set).map(tag => {
    return {
      slug: slugify(tag),
      tag
    };
  });
};

export {
  fetchPosts,
  fetchPost,
  fetchCategories,
  fetchTags
};
