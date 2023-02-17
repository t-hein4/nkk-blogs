import { heading } from '@/lib/fonts';

export function PostCardHeader(props) {
  const { postTitle } = props;
  return (
    <h2 className={`${heading.className} text-3xl font-bold leading-normal`}>
      {postTitle}
    </h2>
  );
}
