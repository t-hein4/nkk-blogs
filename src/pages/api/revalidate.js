export default async function handler(req, res) {
  let secret = Buffer.from(
    req.headers.authorization.split(" ")[1],
    "base64"
  ).toString();
  if (secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate(`/`);
    await res.revalidate(`/posts/${req.body.entity.slug}`);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
