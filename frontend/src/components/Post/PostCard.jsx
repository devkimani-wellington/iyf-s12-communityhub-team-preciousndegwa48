function PostCard({ post }) {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <small>By {post.author}</small>
    </article>
  );
}

export default PostCard;
