function PostCardExercise({ title, excerpt, author, date }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <span>By {author} - {date}</span>
    </article>
  );
}
export default PostCardExercise;
