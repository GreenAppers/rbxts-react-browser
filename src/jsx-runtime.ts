import { createElement, Fragment } from "react";
import { Frame } from "./frame";
import { TextButton } from "./textbutton";
import { TextLabel } from "./textlabel";
import { UICorner } from "./uicorner";

type Source = {
  fileName: string;
  lineNumber: number;
  columnNumber: number;
};

function jsx(
  type: Parameters<typeof createElement>[0],
  props: Record<string, any>,
  key: string | number | undefined
) {
  switch (type.toString().toLocaleLowerCase()) {
    case "frame":
      type = Frame;
      break;
    case "textbutton":
      type = TextButton;
      break;
    case "textlabel":
      type = TextLabel;
      break;
    case "uicorner":
      type = UICorner;
      break;
  }
  if (key !== undefined) {
    return createElement(type, {
      ...props,
      key,
    });
  } else {
    return createElement(type, props);
  }
}

// eslint-disable-next-line max-params
function jsxDEV(
  type: Parameters<typeof createElement>[0],
  props: Record<string, any>,
  key: string | number | undefined,
  isStaticChildren: boolean,
  source: Source | undefined,
  self: unknown
) {
  return jsx(type, props, key);
}

export { jsx, jsx as jsxs, jsxDEV, Fragment };
