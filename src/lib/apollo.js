import { ApolloClient } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {
  AllPosts,
  AllPostSlugs,
  PreviewPostSlug,
  PostAndMorePosts,
} from './query.graphql';

export async function getAllPosts() {
  const variables = {
    orderBy: ['date_DESC'],
  };
  const data = await getFromDatoCms(AllPosts, variables);
  const allPosts = data.allPosts;
  return allPosts;
}

export async function getAllPostSlugs() {
  const data = await getFromDatoCms(AllPostSlugs);
  const allPosts = data.allPosts;
  const slugs = allPosts.map((post) => post.slug);
  return slugs;
}

export async function getPostAndMorePosts(slug) {
  const variables = {
    postFilter: { slug: { eq: slug } },
    morePostsFilter: { slug: { neq: slug } },
    morePostsFirst: 2,
    morePostsOrderBy: ['date_DESC'],
  };
  const data = await getFromDatoCms(PostAndMorePosts, variables);
  return data;
}

export async function getPreviewPostSlug(slug) {
  const variables = {
    filter: { slug: { eq: slug } },
  };
  const preview = true;
  const data = await getFromDatoCms(PreviewPostSlug, variables, preview);
  const post = data.post;
  return post;
}

const { client } = (function setupApollo() {
  const CMS_TOKEN = process.env.DATOCMS_API_TOKEN;
  const CMS_URL = 'https://graphql.datocms.com/';
  const httpLink = createHttpLink({ uri: CMS_URL });
  const authLink = setContext((_, { headers }) => {
    return {
      headers: Object.assign(headers || {}, {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${CMS_TOKEN}`,
      }),
    };
  });

  const cache = new InMemoryCache();
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  });
  return {
    client,
  };
})();

export async function getFromDatoCms(query, variables = {}, preview = false) {
  const response = await client.query({
    query,
    variables,
    preview,
  });
  const data = response.data;
  return data;
}
