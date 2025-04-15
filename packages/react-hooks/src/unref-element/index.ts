import React from "react";

// Define the possible element types (using the base Element type)
export type MaybeElement = Element | null | undefined; // Element covers HTMLElement, SVGElement, etc.

// Define the input type: either a RefObject containing the element, or the element itself
// Note: We don't typically handle getter functions like Vue's `MaybeRefOrGetter` here.
// The caller would usually resolve the getter before passing the value.
export type MaybeElementRef<T extends MaybeElement = MaybeElement> =
  | React.RefObject<T>
  | T;

// Define the return type: the unwrapped element itself (or null/undefined)
export type UnwrappedElement<T extends MaybeElement = MaybeElement> = T;

/**
 * Get the DOM element from a React ref object or the element itself.
 * This is the React equivalent of Vue's unrefElement, focusing on
 * unwrapping React.RefObject.
 *
 * @param elRef - A React RefObject pointing to an element, or the element itself (or null/undefined).
 * @returns The underlying DOM element or null/undefined.
 */
export function unrefElement<T extends MaybeElement>(
  elRef: MaybeElementRef<T>,
): UnwrappedElement<T> {
  // Check if it's a React RefObject (has a .current property)
  // Ensure elRef is not null and is an object before checking 'current'
  if (elRef && typeof elRef === "object" && "current" in elRef) {
    // It's likely a RefObject, return its current value
    // Type assertion might be needed depending on usage context, but T should cover it.
    return elRef.current as UnwrappedElement<T>;
  }

  // Otherwise, assume it's the element (or null/undefined) itself
  return elRef as UnwrappedElement<T>;
}
