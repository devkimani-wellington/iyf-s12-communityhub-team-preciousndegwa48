import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSent(true);
  };

  if (sent) return <p>Thanks {name}! Your message was sent. ✅</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />
      <br /><br />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your message"
      />
      <br /><br />
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
