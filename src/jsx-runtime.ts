import { createElement, Fragment } from "react";
import { TextLabel } from "./textlabel";

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
  switch (type) {
    case "textlabel":
      type = TextLabel;
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
