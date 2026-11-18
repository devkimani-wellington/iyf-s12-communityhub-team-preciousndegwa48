function CardExercise({ title = "CommunityHub", description = "A place to share posts and connect." }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Learn More</button>
    </div>
  );
}

export default CardExercise;
