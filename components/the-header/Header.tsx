import styles from './Header.module.scss';
import Link from 'next/link';
import { ICategory } from '@/lib/posts';

const Header = ({ categories }: { categories: ICategory[] }) => {
  return (
    <div className={styles.blogHeader}>
      <div className={styles.headerTop}>
        <Link href="/">
          <a>
            <h1 className={styles.name}>
              Joe's Blog
            </h1>
          </a>
        </Link>

        <nav className={styles.navigation}>
          <Link href="/">
            <a className={styles.navItem}>Home</a>
          </Link>

          <a
            href="https://sallai.me"
            target="_blank"
            className={styles.navItem}
            rel="noopener noreferrer"
          >Website</a>
        </nav>
      </div>

      {categories && categories.length && (
        <div className={styles.siteCategories}>
          {categories.slice(0).sort((a, b) => a.category.localeCompare(b.category)).map(category => (
            <Link
              href="/categories/[slug]"
              as={`/categories/${category.slug}`}
              key={category.slug}
            >
              <a className={styles.categoryLink}>{category.category}</a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
