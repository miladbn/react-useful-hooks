import { useToggle } from ".";

export function ToggleDemo() {
  const [isOn, toggle, setToggle] = useToggle(false);

  return (
    <div className="demo-container">
      <h2>useToggle Demo</h2>
      <div className="demo-content">
        <p>Current state: {isOn ? "ON" : "OFF"}</p>
        <button onClick={() => toggle()}>Toggle</button>
        <button onClick={() => setToggle(true)}>Set ON</button>
        <button onClick={() => setToggle(false)}>Set OFF</button>
      </div>
    </div>
  );
}
