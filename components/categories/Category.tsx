import Link from 'next/link';

const Categories = ({ categories }: { categories: string[] }) => {
  return (
    <>
      {categories.map((category, idx) => {
        return (
          <span key={category}>
            <Link href="/categories/[category]" as={`/categories/${category}`}>
              <a>{category}</a>
            </Link>

            {idx !== categories.length - 1 && <>, </>}
          </span>
        );
      })}
    </>
  );
};

export default Categories;
