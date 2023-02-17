import { AuthorAvatar } from "./author-avatar";
import { AuthorName } from "./author-name";

export function Author(props) {
  const { author } = props;

  return (
    <div className="flex gap-8 items-center">
      <AuthorAvatar avatar={author.picture} alt={`${author.name}'s picture`} />
      <AuthorName name={author.name} />
    </div>
  );
}
