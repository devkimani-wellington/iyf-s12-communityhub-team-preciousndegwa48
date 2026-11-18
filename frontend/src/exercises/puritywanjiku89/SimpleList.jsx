function SimpleList() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  return (
    <div>
      <h2>My Favorite Fruits</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default SimpleList;
