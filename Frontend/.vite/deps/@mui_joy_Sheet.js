"use client";
import {
  applySoftInversion,
  applySolidInversion
} from "./chunk-G4KTR75N.js";
import {
  resolveSxValue
} from "./chunk-N2HBGAE7.js";
import "./chunk-6PDOWS5J.js";
import "./chunk-TAM2IQJX.js";
import "./chunk-5R73M5S6.js";
import "./chunk-5OU24SLN.js";
import "./chunk-WUJAI72V.js";
import "./chunk-ZIYUGMGG.js";
import "./chunk-IEUJSV3I.js";
import "./chunk-RRJ5VGGI.js";
import {
  useSlot
} from "./chunk-ROVOF3RJ.js";
import {
  generateUtilityClass,
  generateUtilityClasses,
  styled_default,
  useThemeProps
} from "./chunk-UI5QRKCC.js";
import "./chunk-WHHWRBLL.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  capitalize,
  clsx_default,
  composeClasses,
  getPath,
  init_extends,
  require_jsx_runtime
} from "./chunk-T4YXWNPD.js";
import {
  require_prop_types
} from "./chunk-DQROLGKX.js";
import {
  require_react
} from "./chunk-65KY755N.js";
import {
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// node_modules/@mui/joy/Sheet/Sheet.js
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/joy/Sheet/sheetClasses.js
function getSheetUtilityClass(slot) {
  return generateUtilityClass("MuiSheet", slot);
}
var sheetClasses = generateUtilityClasses("MuiSheet", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
var sheetClasses_default = sheetClasses;

// node_modules/@mui/joy/Sheet/Sheet.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "color", "component", "variant", "invertedColors", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    variant,
    color
  } = ownerState;
  const slots = {
    root: ["root", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`]
  };
  return composeClasses(slots, getSheetUtilityClass, {});
};
var SheetRoot = styled_default("div", {
  name: "JoySheet",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants, _theme$variants2;
  const variantStyle = (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color];
  const {
    borderRadius: childRadius,
    bgcolor,
    backgroundColor,
    background
  } = resolveSxValue({
    theme,
    ownerState
  }, ["borderRadius", "bgcolor", "backgroundColor", "background"]);
  const resolvedBg = getPath(theme, `palette.${bgcolor}`) || bgcolor || getPath(theme, `palette.${backgroundColor}`) || backgroundColor || background || (variantStyle == null ? void 0 : variantStyle.backgroundColor) || (variantStyle == null ? void 0 : variantStyle.background) || theme.vars.palette.background.surface;
  return [_extends({
    "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon,
    "--ListItem-stickyBackground": resolvedBg === "transparent" ? "initial" : resolvedBg,
    // for sticky List
    "--Sheet-background": resolvedBg === "transparent" ? "initial" : resolvedBg
  }, childRadius !== void 0 && {
    "--List-radius": `calc(${childRadius} - var(--variant-borderWidth, 0px))`,
    "--unstable_actionRadius": `calc(${childRadius} - var(--variant-borderWidth, 0px))`
  }, {
    backgroundColor: theme.vars.palette.background.surface,
    position: "relative"
  }), _extends({}, theme.typography["body-md"], ownerState.variant === "solid" && ownerState.color && ownerState.invertedColors && applySolidInversion(ownerState.color)(theme), ownerState.variant === "soft" && ownerState.color && ownerState.invertedColors && applySoftInversion(ownerState.color)(theme), (_theme$variants2 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants2[ownerState.color], variantStyle)];
});
var Sheet = React.forwardRef(function Sheet2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoySheet"
  });
  const {
    className,
    color = "neutral",
    component = "div",
    variant = "plain",
    invertedColors = false,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    color,
    component,
    invertedColors,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: SheetRoot,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime.jsx)(SlotRoot, _extends({}, rootProps));
});
true ? Sheet.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * If `true`, the children with an implicit color prop invert their colors to match the component's variant and color.
   * @default false
   */
  invertedColors: import_prop_types.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    root: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types.default.string])
} : void 0;
var Sheet_default = Sheet;
export {
  Sheet_default as default,
  getSheetUtilityClass,
  sheetClasses_default as sheetClasses
};
//# sourceMappingURL=@mui_joy_Sheet.js.map