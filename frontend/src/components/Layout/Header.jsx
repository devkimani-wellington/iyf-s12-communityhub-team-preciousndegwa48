export default function Header() {
  return (
    <header style={{ padding: "16px", background: "#111827", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1 style={{ fontSize: "20px", margin: 0 }}>CommunityHub</h1>
      <nav style={{ display: "flex", gap: "16px" }}>
        <span>Home</span>
        <span>Posts</span>
        <span>Profile</span>
      </nav>
    </header>
  );
}
