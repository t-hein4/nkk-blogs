import { AuthorAvatar } from './author-avatar';
import { AuthorName } from './author-name';

export function Author(props) {
  const { author, avatarWidth, avatarHeight } = props;

  return (
    <div className="flex gap-8 items-center">
      <AuthorAvatar
        src={author.picture.url}
        width={avatarWidth}
        height={avatarHeight}
        alt={`${author.name}'s picture`}
      />
      <AuthorName name={author.name} />
    </div>
  );
}
