import Link from 'next/link';
import { Author } from '../author/author';
import { PostDate } from '../post-date';
import { PostDatoCmsCoverImage } from '../post-dato-cms-cover-image';
import { PostTextLink } from '../post-link';
import { PostCardExcerpt } from './post-card-excerpt';
import { PostCardHeader } from './post-card-header';

export function HeroPostCard(props) {
  const { title, excerpt, date, coverImage, author, slug } = props;

  return (
    <article className="space-y-12">
      <Link href={`/posts/${slug}`}>
        <PostDatoCmsCoverImage
          responsiveImage={coverImage.responsiveImage}
          alt={title}
        />
      </Link>
      <div className="px-4 grid gap-y-4 md:px-0 md:grid-cols-2 md:gap-x-24">
        <div className="space-y-4">
          <PostTextLink slug={slug}>
            <PostCardHeader postTitle={title} />
          </PostTextLink>
          <PostDate date={date} />
        </div>
        <div className="space-y-4">
          <PostCardExcerpt postExcerpt={excerpt} />
          <Author author={author} avatarHeight={64} avatarWidth={64} />
        </div>
      </div>
    </article>
  );
}
