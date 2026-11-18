import { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h2>{isOn ? "It's ON 💡" : "It's OFF"}</h2>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
}

export default Toggle;
