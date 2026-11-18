export default function Sidebar() {
  return (
    <aside style={{ width: "220px", padding: "16px", background: "#F3F4F6", borderRadius: "8px" }}>
      <h3 style={{ marginTop: 0 }}>Menu</h3>
      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
        <li>Dashboard</li>
        <li>My Posts</li>
        <li>Saved</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
}
