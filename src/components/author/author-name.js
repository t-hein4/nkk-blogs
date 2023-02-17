import { heading } from '@/lib/fonts';

export function AuthorName(props) {
  const { name } = props;
  return <span className={`font-bold ${heading.className}`}>{name}</span>;
}
