import { heading } from '@/lib/fonts';
import { PostCard } from './post-card/post-card';

export function MorePosts(props) {
  const { morePosts } = props;

  return (
    <section>
      <div className="px-4 md:px-0 py-8 flex items-center">
        <h2 className={`${heading.className} text-3xl font-bold`}>
          More Stories
        </h2>
      </div>
      <div className="grid gap-16 md:grid-cols-2">
        {morePosts.map((post) => (
          <div className="md:max-w-md" key={post.id}>
            <PostCard {...post} />
            <br />
          </div>
        ))}
      </div>
    </section>
  );
}
