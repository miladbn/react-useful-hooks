# useRefElement

A utility function that safely unwraps a React ref object to get the underlying DOM element.

## Usage

```tsx
import React from "react";
import { unrefElement } from "@react-useful-hooks/react-hooks";

function MyComponent() {
  const divRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const element = unrefElement(divRef);
    if (element) {
      console.log("Element found:", element);
    }
  }, []);

  return <div ref={divRef}>My element</div>;
}
```

## API

### Parameters

- `elRef`: A React RefObject pointing to an element, or the element itself (or null/undefined).

### Returns

The underlying DOM element or null/undefined.

## Examples

### Basic Usage

```tsx
const element = unrefElement(myRef);
```

### With Different Element Types

```tsx
const buttonRef = React.useRef<HTMLButtonElement>(null);
const buttonElement = unrefElement(buttonRef);

const svgRef = React.useRef<SVGElement>(null);
const svgElement = unrefElement(svgRef);
```

## When to Use

- When you need to safely access the DOM element from a React ref
- When working with third-party libraries that expect DOM elements
- When you need to handle both ref objects and direct element references
