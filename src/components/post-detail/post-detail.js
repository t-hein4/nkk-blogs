import { Author } from "../author/author";
import { PostDate } from "../post-date";
import { PostDatoCmsCoverImage } from "../post-dato-cms-cover-image";
import { PostDetailBody } from "./post-detail-body";
import { PostDetailTitle } from "./post-detail-title";

export function PostDetail(props) {
  const { content, title, coverImage, author, date } = props;
  return (
    <div className="flex flex-col gap-10">
      <div className="px-4 md:px-0 space-y-8">
        <PostDetailTitle title={title} />
        <div className="hidden md:block">
          <Author author={author} />
        </div>
      </div>
      <div className="shadow-cover_img">
        <PostDatoCmsCoverImage responsiveImage={coverImage.responsiveImage} />
      </div>
      <div className="px-4 mx-auto space-y-6">
        <div className="px-4 md:hidden">
          <Author author={author} />
        </div>
        <PostDate date={date} />
        <PostDetailBody content={content} />
      </div>
    </div>
  );
}
