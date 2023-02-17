import { IndexBanner } from "@/components/index-banner";
import { Bottom } from "@/components/layout/bottom";
import { HeroPostCard } from "@/components/post-card/hero-post-card";
import { Layout } from "@/components/layout/layout";
import { Middle } from "@/components/layout/middle";
import { MorePosts } from "@/components/more-posts";
import { Top } from "@/components/layout/top";
import { getAllPosts } from "@/lib/apollo";
import Head from "next/head";

export default function Index(props) {
  const { posts } = props;

  return (
    <Layout>
      <Head>
        <title>Blogs.</title>
      </Head>
      <Top>
        <IndexBanner />
      </Top>
      <Middle>
        <HeroPostCard {...posts[0]} />
      </Middle>
      <Bottom>
        <MorePosts morePosts={posts.slice(1)} />
      </Bottom>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
