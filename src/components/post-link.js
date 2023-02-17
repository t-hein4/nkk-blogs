import Link from 'next/link';

export function PostTextLink(props) {
  const { slug, children } = props;
  return (
    <Link href={`/posts/${slug}`} className="hover:underline decoration-[3px]">
      {children}
    </Link>
  );
}
