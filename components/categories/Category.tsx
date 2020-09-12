import slugify from '@sindresorhus/slugify';
import Link from 'next/link';

const Categories = ({ categories }: { categories: string[] }) => {
  const mappedCategories = categories.map(name => {
    return {
      slug: slugify(name),
      name
    };
  });

  return (
    <>
      {mappedCategories.map((category, idx) => {
        return (
          <span key={category.slug}>
            <Link href="/categories/[slug]" as={`/categories/${category.slug}`}>
              <a>{category.name}</a>
            </Link>

            {idx !== categories.length - 1 && <>, </>}
          </span>
        );
      })}
    </>
  );
};

export default Categories;
