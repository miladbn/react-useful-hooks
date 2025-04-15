import { describe, it, expect } from "vitest";
import { createRef } from "react";
import { unrefElement } from ".";

describe("unrefElement", () => {
  it("should return the element from a React ref", () => {
    const element = document.createElement("div");
    const ref = createRef<HTMLDivElement>();
    // @ts-expect-error - for testing purposes
    ref.current = element;

    expect(unrefElement(ref)).toBe(element);
  });

  it("should return null when ref.current is null", () => {
    const ref = createRef<HTMLDivElement>();
    expect(unrefElement(ref)).toBeNull();
  });

  it("should return the element directly when passed an element", () => {
    const element = document.createElement("div");
    expect(unrefElement(element)).toBe(element);
  });

  it("should return null when passed null", () => {
    expect(unrefElement(null)).toBeNull();
  });

  it("should return undefined when passed undefined", () => {
    expect(unrefElement(undefined)).toBeUndefined();
  });

  it("should work with different element types", () => {
    const button = document.createElement("button");
    const ref = createRef<HTMLButtonElement>();
    // @ts-expect-error - for testing purposes
    ref.current = button;

    expect(unrefElement(ref)).toBe(button);
  });
});
