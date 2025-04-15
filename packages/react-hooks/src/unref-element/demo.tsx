import React from "react";
import { unrefElement } from ".";

export function RefElementDemo() {
  const divRef = React.useRef<HTMLDivElement>(null);
  const [elementInfo, setElementInfo] = React.useState<string>("");

  React.useEffect(() => {
    const element = unrefElement(divRef);
    if (element) {
      setElementInfo(
        `Element found: ${element.tagName} with id: ${element.id}`,
      );
    } else {
      setElementInfo("No element found");
    }
  }, []);

  return (
    <div className="demo-container">
      <h2>useRefElement Demo</h2>
      <div className="demo-content">
        <div ref={divRef} id="demo-element">
          This is a demo element
        </div>
        <p>{elementInfo}</p>
      </div>
    </div>
  );
}
