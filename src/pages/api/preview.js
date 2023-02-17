import { getPreviewPostSlug } from '@/lib/apollo';

export default async function handler(req, res) {
  if (
    req.query.secret != process.env.DATOCMS_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const post = await getPreviewPostSlug(req.query.slug);
  if (!post) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  res.setPreviewData({});
  res.writeHead(307, { Location: `/posts/${post.slug}` });
  res.end();
}
