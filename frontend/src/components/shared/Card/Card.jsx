import "./Card.css";

function Card({ title, organisation = "IYF WeCan", amount, deadline, category, status, children }) {
  return (
    <article className="card">
      <div className="card-top">
        <span>{category || "General"}</span>
        <span>{status || "Open"}</span>
      </div>
      <h3>{title}</h3>
      <p><strong>{organisation}</strong></p>
      {amount && <p>Amount: {amount}</p>}
      {deadline && <p>Deadline: {deadline}</p>}
      {children}
    </article>
  );
}
export default Card;
