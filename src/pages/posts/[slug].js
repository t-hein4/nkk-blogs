import { Bottom } from "@/components/layout/bottom";
import { Layout } from "@/components/layout/layout";
import { Middle } from "@/components/layout/middle";
import { MorePosts } from "@/components/more-posts";
import { PostDetail } from "@/components/post-detail/post-detail";
import { Top } from "@/components/layout/top";
import { PostBanner } from "@/components/post-banner";
import { getAllPostSlugs, getPostAndMorePosts } from "@/lib/apollo";
import { convertMdToHtml } from "@/lib/utils";
import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

export default function Post(props) {
  const { post, morePosts, preview } = props;
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Layout previewEnabled={preview}>
        {router.isFallback ? (
          <p>Loading</p>
        ) : (
          <>
            <Head>
              <title>{post.title}</title>
            </Head>
            <Top>
              <PostBanner />
            </Top>
            <Middle>
              <PostDetail {...post} />
            </Middle>
            <hr />
            <Bottom>
              {morePosts.length > 0 && <MorePosts morePosts={morePosts} />}
            </Bottom>
          </>
        )}
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = await getAllPostSlugs();
  return {
    paths: slugs.map((slug) => `/posts/${slug}`),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params, preview = false }) {
  const { slug } = params;
  const postAndMorePosts = await getPostAndMorePosts(slug);
  const post = postAndMorePosts?.post || {};
  const content = await convertMdToHtml(post?.content || "");
  const morePosts = postAndMorePosts?.morePosts || [];
  return {
    props: {
      post: {
        ...post,
        content,
      },
      morePosts,
      preview,
    },
  };
}
