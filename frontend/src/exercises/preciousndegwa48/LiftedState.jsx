import { useState } from 'react';

function PostItem({ post, onLike }) {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <p>Likes: {post.likes}</p>
      <button onClick={() => onLike(post.id)}>Like</button>
    </article>
  );
}

function LiftedState() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', excerpt: 'Hello from React', likes: 0 },
    { id: 2, title: 'Second Post', excerpt: 'Lifting state up', likes: 0 },
  ]);

  function handleLike(id) {
    setPosts(posts.map((post) => post.id === id ? { ...post, likes: post.likes + 1 } : post));
  }

  return (
    <div>
      <h2>Lifted State - Posts</h2>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onLike={handleLike} />
      ))}
    </div>
  );
}

export default LiftedState;
