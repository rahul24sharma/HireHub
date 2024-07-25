import {
  require_jsx_runtime
} from "./chunk-T4YXWNPD.js";
import {
  require_react
} from "./chunk-65KY755N.js";
import {
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// node_modules/@mui/joy/List/RowListContext.js
var React = __toESM(require_react());
var RowListContext = React.createContext(false);
if (true) {
  RowListContext.displayName = "RowListContext";
}
var RowListContext_default = RowListContext;

// node_modules/@mui/joy/styles/variantColorInheritance.js
var React2 = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var VariantColorContext = React2.createContext(void 0);
if (true) {
  VariantColorContext.displayName = "VariantColorContext";
}
function getChildVariantAndColor(parentVariant, parentColor) {
  let childColor = parentColor;
  let childVariant = parentVariant;
  if (parentVariant === "outlined") {
    childColor = "neutral";
    childVariant = "plain";
  }
  if (parentVariant === "plain") {
    childColor = "neutral";
  }
  return {
    variant: childVariant,
    color: childColor
  };
}
function useVariantColor(instanceVariant, instanceColor, alwaysInheritColor = false) {
  const value = React2.useContext(VariantColorContext);
  const [variant, color] = typeof value === "string" ? value.split(":") : [];
  const result = getChildVariantAndColor(variant || void 0, color || void 0);
  result.variant = instanceVariant || result.variant;
  result.color = instanceColor || (alwaysInheritColor ? color : result.color);
  return result;
}
function VariantColorProvider({
  children,
  color,
  variant
}) {
  return (0, import_jsx_runtime.jsx)(VariantColorContext.Provider, {
    value: `${variant || ""}:${color || ""}`,
    children
  });
}

export {
  RowListContext_default,
  useVariantColor,
  VariantColorProvider
};
//# sourceMappingURL=chunk-QKL6QU4Q.js.map
