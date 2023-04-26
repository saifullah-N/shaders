import * as React from "react";
import { Html as HtmlImpl } from "@react-three/drei";
import { useContextBridge } from "its-fine";

export const Html = React.forwardRef(function Html(
  { children, ...props },
  ref
) {
  const Bridge = useContextBridge();
  return (
    <HtmlImpl {...props} ref={ref}>
      <Bridge>{children}</Bridge>
    </HtmlImpl>
  );
});
