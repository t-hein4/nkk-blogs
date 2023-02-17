import Link from "next/link";
import { Author } from "../author/author";
import { PostDate } from "../post-date";
import { PostDatoCmsCoverImage } from "../post-dato-cms-cover-image";
import { PostTextLink } from "../post-link";
import { PostCardExcerpt } from "./post-card-excerpt";
import { PostCardHeader } from "./post-card-header";

export function PostCard(props) {
  const { title, excerpt, date, coverImage, author, slug } = props;

  return (
    <article className="space-y-8">
      <Link href={`/posts/${slug}`}>
        <PostDatoCmsCoverImage
          responsiveImage={coverImage.responsiveImage}
          alt={title}
        />
      </Link>
      <div className="px-4 md:px-0 space-y-4">
        <PostTextLink slug={slug}>
          <PostCardHeader postTitle={title} />
        </PostTextLink>
        <PostDate date={date} />
        <PostCardExcerpt postExcerpt={excerpt} />
        <Author author={author} />
      </div>
    </article>
  );
}
