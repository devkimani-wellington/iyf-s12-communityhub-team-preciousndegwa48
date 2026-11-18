function Intro() {
  const today = new Date().toDateString();
  const hour = new Date().getHours();
  const message = hour < 12 ? "Good morning!" : hour < 18 ? "Good afternoon!" : "Good evening!";

  return (
    <div>
      <h1>Precious Ndegwa</h1>
      <p>I am learning React in Week 8 of IYF Weekend Academy.</p>
      <p>I love building clean user interfaces with components.</p>
      <p>My goal is to build CommunityHub with my team.</p>
      <p>Today is {today}</p>
      <p>{message} Welcome to my intro!</p>
    </div>
  );
}
export default Intro;
