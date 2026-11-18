import { useState } from "react";

function PostCardExercise({ author = "Purity", content = "Hello CommunityHub! This is my first post." }) {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px" }}>
      <h3>{author}</h3>
      <p>{content}</p>
      <button onClick={() => setLikes(likes + 1)}>❤️ Like ({likes})</button>
    </div>
  );
}

export default PostCardExercise;
