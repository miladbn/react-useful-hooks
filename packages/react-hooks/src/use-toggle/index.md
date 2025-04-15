# useToggle

A React hook that provides a boolean state with toggle functionality.

## Usage

```tsx
import { useToggle } from "@react-useful-hooks/react-hooks";

function MyComponent() {
  const [isOn, toggle] = useToggle(false);

  return (
    <div>
      <p>Current state: {isOn ? "ON" : "OFF"}</p>
      <button onClick={() => toggle()}>Toggle</button>
      <button onClick={() => toggle(true)}>Set ON</button>
      <button onClick={() => toggle(false)}>Set OFF</button>
    </div>
  );
}
```

## API

### Parameters

- `initialValue` (optional): The initial boolean value. Defaults to `false`.

### Returns

A tuple containing:

1. `state`: The current boolean state
2. `toggle`: A function to toggle or set the state
   - When called with no arguments: toggles the current state
   - When called with a boolean: sets the state to that value

## Examples

### Basic Usage

```tsx
const [isOn, toggle] = useToggle(false);

// Toggle the state
toggle();

// Set to true
toggle(true);

// Set to false
toggle(false);
```

### With Custom Initial Value

```tsx
const [isOn, toggle] = useToggle(true); // Starts with true
```

## When to Use

- When you need a simple boolean state that can be toggled
- When you want to control a binary state (on/off, show/hide, etc.)
- When you need to provide both toggle and set functionality for a boolean state
