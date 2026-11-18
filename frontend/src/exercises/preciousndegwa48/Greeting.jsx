function Greeting({ name = "Guest", timeOfDay = "morning" }) {
  return <h2>Good {timeOfDay}, {name}!</h2>;
}
export default Greeting;
