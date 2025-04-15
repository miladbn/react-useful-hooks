import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useToggle } from "./index";

describe("useToggle", () => {
  it("should initialize with false by default", () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);
  });

  it("should initialize with provided initial state", () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current[0]).toBe(true);
  });

  it("should toggle the state", () => {
    const { result } = renderHook(() => useToggle());
    const [, toggle] = result.current;

    act(() => {
      toggle();
    });

    expect(result.current[0]).toBe(true);

    act(() => {
      toggle();
    });

    expect(result.current[0]).toBe(false);
  });

  it("should allow setting state directly", () => {
    const { result } = renderHook(() => useToggle());
    const [, , setState] = result.current;

    act(() => {
      setState(true);
    });

    expect(result.current[0]).toBe(true);

    act(() => {
      setState(false);
    });

    expect(result.current[0]).toBe(false);
  });
});
