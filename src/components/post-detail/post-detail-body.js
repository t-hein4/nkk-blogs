export function PostDetailBody(props) {
  const { content } = props;

  return (
    <div dangerouslySetInnerHTML={{ __html: content }} className="markdown" />
  );
}
