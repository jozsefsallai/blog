import styles from './PostList.module.scss';

import { IPost } from "@/lib/posts";
import Post from "./Post";

const PostList = ({ posts }: { posts: IPost[] }) => {
  return (
    <div className={styles.list}>
      {posts.map(post => {
        return <Post key={post.slug} post={post} list={true} />;
      })}
    </div>
  );
};

export default PostList;
