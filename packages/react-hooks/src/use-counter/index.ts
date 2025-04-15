import { useState, useCallback, useRef } from "react";

// --- TypeScript Interfaces (similar to Vue) ---
export interface UseCounterOptions {
  min?: number;
  max?: number;
}

export interface UseCounterReturn {
  /**
   * The current value of the counter.
   */
  readonly count: number; // Direct number state
  /**
   * Increment the counter.
   *
   * @param {number} [delta=1] The number to increment.
   */
  inc: (delta?: number) => void;
  /**
   * Decrement the counter.
   *
   * @param {number} [delta=1] The number to decrement.
   */
  dec: (delta?: number) => void;
  /**
   * Set the counter to a new value.
   *
   * @param val The new value of the counter.
   */
  set: (val: number) => void;
  /**
   * Reset the counter to its initial value or a new provided value.
   *
   * @param val The new value to reset to (defaults to the initial value provided to the hook).
   */
  reset: (val?: number) => void; // Return type is void, set handles the update
}

// --- Helper function for clamping ---
const clamp = (value: number, min: number, max: number): number => {
  return Math.max(min, Math.min(max, value));
};

/**
 * Basic counter hook with utility functions. Similar to VueUse useCounter.
 *
 * @param initialValue The initial value of the counter (defaults to 0).
 * @param options Optional configuration with min and max bounds.
 */
export function useCounter(
  initialValue: number = 0,
  options: UseCounterOptions = {},
): UseCounterReturn {
  const { min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY } =
    options;

  // Validate and clamp the initial value immediately
  const clampedInitialValue = clamp(initialValue, min, max);

  // Store the effective initial value for reset functionality
  const initialValueRef = useRef(clampedInitialValue);

  // Initialize the state with the clamped initial value
  const [count, setCount] = useState<number>(clampedInitialValue);

  // --- State Update Functions ---

  const set = useCallback(
    (value: number) => {
      setCount(clamp(value, min, max));
    },
    [min, max],
  ); // Dependencies: min/max affect the clamping logic

  const inc = useCallback(
    (delta: number = 1) => {
      // Use functional update to ensure we work with the latest state
      setCount((currentCount) => clamp(currentCount + delta, min, max));
    },
    [min, max],
  ); // Dependencies: min/max affect the clamping logic

  const dec = useCallback(
    (delta: number = 1) => {
      // Use functional update
      setCount((currentCount) => clamp(currentCount - delta, min, max));
    },
    [min, max],
  ); // Dependencies: min/max affect the clamping logic

  const reset = useCallback(
    (value?: number) => {
      // Determine the value to reset to
      const resetValue =
        value === undefined
          ? initialValueRef.current // Use the stored initial value
          : clamp(value, min, max); // Use the provided value (clamped)

      // If a new value is provided to reset, update the ref *and* the state
      if (value !== undefined) {
        initialValueRef.current = resetValue; // Update the "initial" value for future resets without argument
      }

      setCount(resetValue); // Set the state
    },
    [min, max],
  ); // Dependencies: min/max affect clamping if new value is passed

  // --- Return Value ---
  return { count, inc, dec, set, reset };
}
