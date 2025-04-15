import { useState, useCallback } from "react";

/**
 * A hook that provides a boolean state and functions to toggle it
 * @param initialState - The initial state of the toggle
 * @returns [state, toggle, setState] - The current state, a toggle function, and a setState function
 */
export function useToggle(
  initialState = false,
): [boolean, () => void, (value: boolean) => void] {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((state) => !state), []);
  return [state, toggle, setState];
}
