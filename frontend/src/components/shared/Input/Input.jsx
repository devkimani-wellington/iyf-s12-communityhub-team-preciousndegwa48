import "./Input.css";

function Input({ label, type = "text", value, onChange, placeholder, name }) {
  return (
    <label className="input-wrap">
      {label}
      <input
        className="input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
}
export default Input;
