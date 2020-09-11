import Link from 'next/link';

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <>
      {tags.map((tag, idx) => {
        return (
          <span key={tag}>
            <Link href="/tags/[tag]" as={`/tags/${encodeURIComponent(tag)}`}>
              <a>{tag}</a>
            </Link>

            {idx !== tags.length - 1 && <>, </>}
          </span>
        );
      })}
    </>
  );
};

export default Tags;
