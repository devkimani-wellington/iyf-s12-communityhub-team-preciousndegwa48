function CardExercise({ children, title, variant = "primary" }) {
  return (
    <div className={`card card-${variant}`}>
      {title && <h3>{title}</h3>}
      <div>{children}</div>
    </div>
  );
}
export default CardExercise;
