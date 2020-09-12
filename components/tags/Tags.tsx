import slugify from '@sindresorhus/slugify';
import Link from 'next/link';

const Tags = ({ tags }: { tags: string[] }) => {
  const mappedTags = tags.map(name => {
    return {
      slug: slugify(name),
      name
    };
  });

  return (
    <>
      {mappedTags.map((tag, idx) => {
        return (
          <span key={tag.slug}>
            <Link href="/tags/[slug]" as={`/tags/${tag.slug}`}>
              <a>{tag.name}</a>
            </Link>

            {idx !== tags.length - 1 && <>, </>}
          </span>
        );
      })}
    </>
  );
};

export default Tags;
