import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./index";

describe("useCounter", () => {
  it("should initialize with 0 by default", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it("should initialize with provided initial value", () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
  });

  it("should increment the counter", () => {
    const { result } = renderHook(() => useCounter(0));
    const { inc } = result.current;

    act(() => {
      inc();
    });

    expect(result.current.count).toBe(1);

    act(() => {
      inc(5);
    });

    expect(result.current.count).toBe(6);
  });

  it("should decrement the counter", () => {
    const { result } = renderHook(() => useCounter(10));
    const { dec } = result.current;

    act(() => {
      dec();
    });

    expect(result.current.count).toBe(9);

    act(() => {
      dec(5);
    });

    expect(result.current.count).toBe(4);
  });

  it("should respect min and max bounds", () => {
    const { result } = renderHook(() => useCounter(5, { min: 0, max: 10 }));
    const { inc, dec } = result.current;

    act(() => {
      inc(10);
    });

    expect(result.current.count).toBe(10);

    act(() => {
      dec(20);
    });

    expect(result.current.count).toBe(0);
  });

  it("should set the counter to a specific value", () => {
    const { result } = renderHook(() => useCounter(0));
    const { set } = result.current;

    act(() => {
      set(5);
    });

    expect(result.current.count).toBe(5);
  });

  it("should reset the counter", () => {
    const { result } = renderHook(() => useCounter(5));
    const { inc, reset } = result.current;

    act(() => {
      inc(5);
    });

    expect(result.current.count).toBe(10);

    act(() => {
      reset();
    });

    expect(result.current.count).toBe(5);

    act(() => {
      reset(0);
    });

    expect(result.current.count).toBe(0);
  });
});
