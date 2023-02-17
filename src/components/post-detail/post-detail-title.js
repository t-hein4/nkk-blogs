import { heading } from '@/lib/fonts';

export function PostDetailTitle(props) {
  const { title } = props;
  return (
    <h1
      className={`${heading.className} md:text-left md:text-6xl md:font-semibold md:leading-snug lg:text-7xl text-4xl font-semibold text-center leading-snug`}
    >
      {title}
    </h1>
  );
}
