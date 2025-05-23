# useCounter

A React hook that provides a counter state with increment, decrement, set, and reset functionality.

## Usage

```tsx
import { useCounter } from "@react-useful-hooks/react-hooks";

function MyComponent() {
  const { count, inc, dec, set, reset } = useCounter(0, { min: 0, max: 10 });

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => inc()}>Increment</button>
      <button onClick={() => dec()}>Decrement</button>
      <button onClick={() => set(5)}>Set to 5</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}
```

## API

### Parameters

- `initialValue` (optional): The initial value of the counter. Defaults to `0`.
- `options` (optional): Configuration object with:
  - `min` (optional): Minimum value allowed. Defaults to `-Infinity`.
  - `max` (optional): Maximum value allowed. Defaults to `Infinity`.

### Returns

An object containing:

- `count`: The current value of the counter
- `inc`: Function to increment the counter
  - When called with no arguments: increments by 1
  - When called with a number: increments by that amount
- `dec`: Function to decrement the counter
  - When called with no arguments: decrements by 1
  - When called with a number: decrements by that amount
- `set`: Function to set the counter to a specific value
- `reset`: Function to reset the counter
  - When called with no arguments: resets to initial value
  - When called with a number: resets to that value

## Examples

### Basic Usage

```tsx
const { count, inc, dec } = useCounter();

// Increment by 1
inc();

// Decrement by 1
dec();

// Increment by 5
inc(5);

// Decrement by 3
dec(3);
```

### With Bounds

```tsx
const { count, inc, dec } = useCounter(0, { min: 0, max: 10 });

// Will not go below 0 or above 10
inc(20); // count will be 10
dec(20); // count will be 0
```

### Reset Functionality

```tsx
const { count, reset } = useCounter(5);

// Reset to initial value (5)
reset();

// Reset to a new value
reset(10);
```

## When to Use

- When you need a numeric counter with bounds
- When you need to increment/decrement values
- When you need to reset a counter to its initial value
- When you need to enforce minimum and maximum values
