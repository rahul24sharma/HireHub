"use client";
import {
  FormControlContext_default
} from "./chunk-2X5B2SWM.js";
import {
  RowListContext_default,
  VariantColorProvider
} from "./chunk-QKL6QU4Q.js";
import {
  resolveSxValue
} from "./chunk-N2HBGAE7.js";
import {
  Popper,
  SelectProvider,
  useSelect
} from "./chunk-6PDOWS5J.js";
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
import {
  useForkRef
} from "./chunk-WHHWRBLL.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  capitalize,
  clsx_default,
  composeClasses,
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

// node_modules/@mui/joy/Select/Select.js
init_extends();
var React11 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@mui/joy/List/List.js
init_extends();
var React7 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/joy/List/listClasses.js
function getListUtilityClass(slot) {
  return generateUtilityClass("MuiList", slot);
}
var listClasses = generateUtilityClasses("MuiList", ["root", "nesting", "scoped", "sizeSm", "sizeMd", "sizeLg", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "horizontal", "vertical"]);

// node_modules/@mui/joy/List/NestedListContext.js
var React = __toESM(require_react());
var NestedListContext = React.createContext(false);
if (true) {
  NestedListContext.displayName = "NestedListContext";
}
var NestedListContext_default = NestedListContext;

// node_modules/@mui/joy/List/ComponentListContext.js
var React2 = __toESM(require_react());
var ComponentListContext = React2.createContext(void 0);
if (true) {
  ComponentListContext.displayName = "ComponentListContext";
}
var ComponentListContext_default = ComponentListContext;

// node_modules/@mui/joy/List/GroupListContext.js
var React3 = __toESM(require_react());
var GroupListContext = React3.createContext(void 0);
if (true) {
  GroupListContext.displayName = "GroupListContext";
}
var GroupListContext_default = GroupListContext;

// node_modules/@mui/joy/List/ListProvider.js
init_extends();
var React5 = __toESM(require_react());

// node_modules/@mui/joy/List/WrapListContext.js
var React4 = __toESM(require_react());
var WrapListContext = React4.createContext(false);
if (true) {
  WrapListContext.displayName = "WrapListContext";
}
var WrapListContext_default = WrapListContext;

// node_modules/@mui/joy/List/ListProvider.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var scopedVariables = {
  "--NestedList-marginRight": "0px",
  "--NestedList-marginLeft": "0px",
  "--NestedListItem-paddingLeft": "var(--ListItem-paddingX)",
  // reset ListItem, ListItemButton negative margin (caused by NestedListItem)
  "--ListItemButton-marginBlock": "0px",
  "--ListItemButton-marginInline": "0px",
  "--ListItem-marginBlock": "0px",
  "--ListItem-marginInline": "0px"
};
function ListProvider(props) {
  const {
    children,
    nested,
    row = false,
    wrap = false
  } = props;
  const baseProviders = (0, import_jsx_runtime.jsx)(RowListContext_default.Provider, {
    value: row,
    children: (0, import_jsx_runtime.jsx)(WrapListContext_default.Provider, {
      value: wrap,
      children: React5.Children.map(children, (child, index) => React5.isValidElement(child) ? React5.cloneElement(child, _extends({}, index === 0 && {
        "data-first-child": ""
      }, index === React5.Children.count(children) - 1 && {
        "data-last-child": ""
      })) : child)
    })
  });
  if (nested === void 0) {
    return baseProviders;
  }
  return (0, import_jsx_runtime.jsx)(NestedListContext_default.Provider, {
    value: nested,
    children: baseProviders
  });
}
var ListProvider_default = ListProvider;

// node_modules/@mui/joy/RadioGroup/RadioGroupContext.js
var React6 = __toESM(require_react());
var RadioGroupContext = React6.createContext(void 0);
if (true) {
  RadioGroupContext.displayName = "RadioGroupContext";
}
var RadioGroupContext_default = RadioGroupContext;

// node_modules/@mui/joy/List/List.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["component", "className", "children", "size", "orientation", "wrap", "variant", "color", "role", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    variant,
    color,
    size,
    nesting,
    orientation,
    instanceSize
  } = ownerState;
  const slots = {
    root: ["root", orientation, variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, !instanceSize && !nesting && size && `size${capitalize(size)}`, instanceSize && `size${capitalize(instanceSize)}`, nesting && "nesting"]
  };
  return composeClasses(slots, getListUtilityClass, {});
};
var StyledList = styled_default("ul")(({
  theme,
  ownerState
}) => {
  var _theme$variants;
  const {
    p,
    padding,
    borderRadius
  } = resolveSxValue({
    theme,
    ownerState
  }, ["p", "padding", "borderRadius"]);
  function applySizeVars(size) {
    if (size === "sm") {
      return {
        "--ListDivider-gap": "0.25rem",
        "--ListItem-minHeight": "2rem",
        "--ListItem-paddingY": "3px",
        "--ListItem-paddingX": ownerState.marker ? "3px" : "0.5rem",
        "--ListItem-gap": "0.5rem",
        "--ListItemDecorator-size": ownerState.orientation === "horizontal" ? "1.5rem" : "2rem",
        "--Icon-fontSize": theme.vars.fontSize.lg
      };
    }
    if (size === "md") {
      return {
        "--ListDivider-gap": "0.375rem",
        "--ListItem-minHeight": "2.25rem",
        "--ListItem-paddingY": "0.25rem",
        "--ListItem-paddingX": ownerState.marker ? "0.25rem" : "0.75rem",
        "--ListItem-gap": "0.625rem",
        "--ListItemDecorator-size": ownerState.orientation === "horizontal" ? "1.75rem" : "2.5rem",
        "--Icon-fontSize": theme.vars.fontSize.xl
      };
    }
    if (size === "lg") {
      return {
        "--ListDivider-gap": "0.5rem",
        "--ListItem-minHeight": "2.75rem",
        "--ListItem-paddingY": "0.375rem",
        "--ListItem-paddingX": ownerState.marker ? "0.5rem" : "1rem",
        "--ListItem-gap": "0.75rem",
        "--ListItemDecorator-size": ownerState.orientation === "horizontal" ? "2.25rem" : "3rem",
        "--Icon-fontSize": theme.vars.fontSize.xl2
      };
    }
    return {};
  }
  return [ownerState.nesting && _extends({}, applySizeVars(ownerState.instanceSize), {
    "--ListItem-paddingRight": "var(--ListItem-paddingX)",
    "--ListItem-paddingLeft": "var(--NestedListItem-paddingLeft)",
    // reset ListItem, ListItemButton negative margin (caused by NestedListItem)
    "--ListItemButton-marginBlock": "0px",
    "--ListItemButton-marginInline": "0px",
    "--ListItem-marginBlock": "0px",
    "--ListItem-marginInline": "0px",
    padding: 0
  }, ownerState.marker && {
    paddingInlineStart: "calc(3ch - var(--_List-markerDeduct, 0px))"
    // the width of the marker
  }, {
    marginInlineStart: "var(--NestedList-marginLeft)",
    marginInlineEnd: "var(--NestedList-marginRight)",
    marginBlockStart: "var(--List-gap)",
    marginBlockEnd: "initial"
    // reset user agent stylesheet.
  }), !ownerState.nesting && _extends({}, applySizeVars(ownerState.size), {
    "--List-gap": "0px",
    "--List-nestedInsetStart": "0px",
    "--ListItem-paddingLeft": "var(--ListItem-paddingX)",
    "--ListItem-paddingRight": "var(--ListItem-paddingX)"
  }, ownerState.marker && {
    "--_List-markerDeduct": "1ch"
  }, {
    // Automatic radius adjustment kicks in only if '--List-padding' and '--List-radius' are provided.
    "--unstable_List-childRadius": "calc(max(var(--List-radius) - var(--List-padding), min(var(--List-padding) / 2, var(--List-radius) / 2)) - var(--variant-borderWidth, 0px))",
    "--ListItem-radius": "var(--unstable_List-childRadius)",
    // by default, The ListItem & ListItemButton use automatic radius adjustment based on the parent List.
    "--ListItem-startActionTranslateX": "calc(0.5 * var(--ListItem-paddingLeft))",
    "--ListItem-endActionTranslateX": "calc(-0.5 * var(--ListItem-paddingRight))",
    margin: "initial"
  }, theme.typography[`body-${ownerState.size}`], ownerState.orientation === "horizontal" ? _extends({}, ownerState.wrap ? {
    padding: "var(--List-padding)",
    // Fallback is not needed for row-wrap List
    marginInlineStart: "calc(-1 * var(--List-gap))",
    marginBlockStart: "calc(-1 * var(--List-gap))"
  } : {
    paddingInline: "var(--List-padding, var(--ListDivider-gap))",
    paddingBlock: "var(--List-padding)"
  }) : {
    paddingBlock: "var(--List-padding, var(--ListDivider-gap))",
    paddingInline: "var(--List-padding)"
  }, ownerState.marker && {
    paddingInlineStart: "3ch"
    // the width of the marker
  }), _extends({
    boxSizing: "border-box",
    borderRadius: "var(--List-radius)",
    listStyle: "none",
    display: "flex",
    flexDirection: ownerState.orientation === "horizontal" ? "row" : "column"
  }, ownerState.wrap && {
    flexWrap: "wrap"
  }, ownerState.marker && {
    "--_List-markerDisplay": "list-item",
    "--_List-markerType": ownerState.marker,
    lineHeight: "calc(var(--ListItem-minHeight) - 2 * var(--ListItem-paddingY))"
  }, {
    flexGrow: 1,
    position: "relative"
  }, (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color], {
    "--unstable_List-borderWidth": "var(--variant-borderWidth, 0px)"
  }, borderRadius !== void 0 && {
    "--List-radius": borderRadius
  }, p !== void 0 && {
    "--List-padding": p
  }, padding !== void 0 && {
    "--List-padding": padding
  })];
});
var ListRoot = styled_default(StyledList, {
  name: "JoyList",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var List = React7.forwardRef(function List2(inProps, ref) {
  var _inProps$size;
  const nesting = React7.useContext(NestedListContext_default);
  const group = React7.useContext(GroupListContext_default);
  const radioGroupContext = React7.useContext(RadioGroupContext_default);
  const props = useThemeProps({
    props: inProps,
    name: "JoyList"
  });
  const {
    component,
    className,
    children,
    size: sizeProp,
    orientation = "vertical",
    wrap = false,
    variant = "plain",
    color = "neutral",
    role: roleProp,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const size = sizeProp || ((_inProps$size = inProps.size) != null ? _inProps$size : "md");
  let role;
  if (group) {
    role = "group";
  }
  if (radioGroupContext) {
    role = "presentation";
  }
  if (roleProp) {
    role = roleProp;
  }
  const ownerState = _extends({}, props, {
    instanceSize: inProps.size,
    size,
    nesting,
    orientation,
    wrap,
    variant,
    color,
    role
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
    elementType: ListRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      as: component,
      role,
      "aria-labelledby": typeof nesting === "string" ? nesting : void 0
    }
  });
  return (0, import_jsx_runtime2.jsx)(SlotRoot, _extends({}, rootProps, {
    children: (0, import_jsx_runtime2.jsx)(ComponentListContext_default.Provider, {
      value: `${typeof component === "string" ? component : ""}:${role || ""}`,
      children: (0, import_jsx_runtime2.jsx)(ListProvider_default, {
        row: orientation === "horizontal",
        wrap,
        children
      })
    })
  }));
});
true ? List.propTypes = {
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
   * The marker (such as a disc, character, or custom counter style) of the list items.
   * When this prop is specified, the List Item changes the CSS display to `list-item` in order to apply the marker.
   *
   * To see all available options, check out the [MDN list-style-type page](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type).
   */
  marker: import_prop_types.default.string,
  /**
   * The component orientation.
   * @default 'vertical'
   */
  orientation: import_prop_types.default.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: import_prop_types.default.string,
  /**
   * The size of the component (affect other nested list* components).
   * @default 'md'
   */
  size: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["sm", "md", "lg"]), import_prop_types.default.string]),
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
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types.default.string]),
  /**
   * Only for horizontal list.
   * If `true`, the list sets the flex-wrap to "wrap" and adjust margin to have gap-like behavior (will move to `gap` in the future).
   *
   * @default false
   */
  wrap: import_prop_types.default.bool
} : void 0;

// node_modules/@mui/joy/internal/svg-icons/Unfold.js
var React10 = __toESM(require_react());

// node_modules/@mui/joy/utils/createSvgIcon.js
init_extends();
var React9 = __toESM(require_react());

// node_modules/@mui/joy/SvgIcon/SvgIcon.js
init_extends();
var import_prop_types2 = __toESM(require_prop_types());
var React8 = __toESM(require_react());

// node_modules/@mui/joy/SvgIcon/svgIconClasses.js
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorInherit", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "fontSizeInherit", "fontSizeXs", "fontSizeSm", "fontSizeMd", "fontSizeLg", "fontSizeXl", "fontSizeXl2", "fontSizeXl3", "fontSizeXl4", "sizeSm", "sizeMd", "sizeLg"]);

// node_modules/@mui/joy/SvgIcon/SvgIcon.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var _excluded2 = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox", "size", "slots", "slotProps"];
var useUtilityClasses2 = (ownerState) => {
  const {
    color,
    size,
    fontSize
  } = ownerState;
  const slots = {
    root: ["root", color && color !== "inherit" && `color${capitalize(color)}`, size && `size${capitalize(size)}`, fontSize && `fontSize${capitalize(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, {});
};
var sizeMap = {
  sm: "xl",
  md: "xl2",
  lg: "xl3"
};
var SvgIconRoot = styled_default("svg", {
  name: "JoySvgIcon",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$vars$palette;
  return _extends({}, ownerState.instanceSize && {
    "--Icon-fontSize": theme.vars.fontSize[sizeMap[ownerState.instanceSize]]
  }, ownerState.instanceFontSize && ownerState.instanceFontSize !== "inherit" && {
    "--Icon-fontSize": theme.vars.fontSize[ownerState.instanceFontSize]
  }, {
    userSelect: "none",
    margin: "var(--Icon-margin)",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: ownerState.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    fontSize: `var(--Icon-fontSize, ${theme.vars.fontSize[sizeMap[ownerState.size]] || "unset"})`
  }, ownerState.fontSize && ownerState.fontSize !== "inherit" && {
    fontSize: `var(--Icon-fontSize, ${theme.fontSize[ownerState.fontSize]})`
  }, !ownerState.htmlColor && _extends({
    color: `var(--Icon-color, ${theme.vars.palette.text.icon})`
  }, ownerState.color === "inherit" && {
    color: "inherit"
  }, ownerState.color !== "inherit" && theme.vars.palette[ownerState.color] && {
    color: `rgba(${(_theme$vars$palette = theme.vars.palette[ownerState.color]) == null ? void 0 : _theme$vars$palette.mainChannel} / 1)`
  }));
});
var SvgIcon = React8.forwardRef(function SvgIcon2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoySvgIcon"
  });
  const {
    children,
    className,
    color,
    component = "svg",
    fontSize,
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = "0 0 24 24",
    size = "md",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const hasSvgAsChild = React8.isValidElement(children) && children.type === "svg";
  const ownerState = _extends({}, props, {
    color,
    component,
    size,
    instanceSize: inProps.size,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  });
  const classes = useUtilityClasses2(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: SvgIconRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: _extends({
      color: htmlColor,
      focusable: false
    }, titleAccess && {
      role: "img"
    }, !titleAccess && {
      "aria-hidden": true
    }, !inheritViewBox && {
      viewBox
    }, hasSvgAsChild && children.props)
  });
  return (0, import_jsx_runtime4.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? (0, import_jsx_runtime3.jsx)("title", {
      children: titleAccess
    }) : null]
  }));
});
true ? SvgIcon.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: import_prop_types2.default.node,
  /**
   * @ignore
   */
  className: import_prop_types2.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   */
  color: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["danger", "inherit", "neutral", "primary", "success", "warning"]), import_prop_types2.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types2.default.elementType,
  /**
   * The theme's fontSize applied to the icon that will override the `size` prop.
   * Use this prop when you want to use a specific font-size from the theme.
   */
  fontSize: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["inherit", "lg", "md", "sm", "xl", "xl2", "xl3", "xl4", "xs"]), import_prop_types2.default.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: import_prop_types2.default.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: import_prop_types2.default.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: import_prop_types2.default.string,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["sm", "md", "lg"]), import_prop_types2.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types2.default.shape({
    root: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types2.default.shape({
    root: import_prop_types2.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: import_prop_types2.default.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: import_prop_types2.default.string
} : void 0;
var SvgIcon_default = SvgIcon;

// node_modules/@mui/joy/utils/createSvgIcon.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return (0, import_jsx_runtime5.jsx)(SvgIcon_default, _extends({
      "data-testid": `${displayName}Icon`,
      ref
    }, props, {
      children: path
    }));
  }
  if (true) {
    Component.displayName = `${displayName}Icon`;
  }
  Component.muiName = SvgIcon_default.muiName;
  return React9.memo(React9.forwardRef(Component));
}

// node_modules/@mui/joy/internal/svg-icons/Unfold.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var Unfold_default = createSvgIcon((0, import_jsx_runtime6.jsx)("path", {
  d: "m12 5.83 2.46 2.46c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 3.7a.9959.9959 0 0 0-1.41 0L8.12 6.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 5.83zm0 12.34-2.46-2.46a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L12 18.17z"
}), "Unfold");

// node_modules/@mui/joy/Select/selectClasses.js
function getSelectUtilityClass(slot) {
  return generateUtilityClass("MuiSelect", slot);
}
var selectClasses = generateUtilityClasses("MuiSelect", ["root", "button", "indicator", "startDecorator", "endDecorator", "popper", "listbox", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg", "focusVisible", "disabled", "expanded", "multiple"]);
var selectClasses_default = selectClasses;

// node_modules/@mui/joy/Select/Select.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var _Unfold;
var _excluded3 = ["action", "autoFocus", "children", "defaultValue", "defaultListboxOpen", "disabled", "getSerializedValue", "placeholder", "listboxId", "listboxOpen", "onChange", "onListboxOpenChange", "onClose", "renderValue", "required", "value", "size", "variant", "color", "startDecorator", "endDecorator", "indicator", "aria-describedby", "aria-label", "aria-labelledby", "id", "name", "multiple", "slots", "slotProps"];
function defaultRenderValue(selectedOptions) {
  var _selectedOptions$labe;
  if (Array.isArray(selectedOptions)) {
    return (0, import_jsx_runtime7.jsx)(React11.Fragment, {
      children: selectedOptions.map((o) => o.label).join(", ")
    });
  }
  return (_selectedOptions$labe = selectedOptions == null ? void 0 : selectedOptions.label) != null ? _selectedOptions$labe : "";
}
var defaultModifiers = [{
  name: "offset",
  options: {
    offset: [0, 4]
  }
}, {
  // popper will have the same width as root element when open
  name: "equalWidth",
  enabled: true,
  phase: "beforeWrite",
  requires: ["computeStyles"],
  fn: ({
    state
  }) => {
    state.styles.popper.width = `${state.rects.reference.width}px`;
  }
}];
var useUtilityClasses3 = (ownerState) => {
  const {
    color,
    disabled,
    focusVisible,
    size,
    variant,
    open,
    multiple
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible", open && "expanded", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`, multiple && "multiple"],
    button: ["button"],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"],
    indicator: ["indicator", open && "expanded"],
    listbox: ["listbox", open && "expanded", disabled && "disabled"]
  };
  return composeClasses(slots, getSelectUtilityClass, {});
};
var SelectRoot = styled_default("div", {
  name: "JoySelect",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants, _theme$vars$palette, _theme$vars$palette2, _theme$variants2, _theme$variants3;
  const variantStyle = (_theme$variants = theme.variants[`${ownerState.variant}`]) == null ? void 0 : _theme$variants[ownerState.color];
  const {
    borderRadius
  } = resolveSxValue({
    theme,
    ownerState
  }, ["borderRadius"]);
  return [_extends({
    "--Select-radius": theme.vars.radius.sm,
    "--Select-gap": "0.5rem",
    "--Select-placeholderOpacity": 0.64,
    "--Select-decoratorColor": theme.vars.palette.text.icon,
    "--Select-focusedThickness": theme.vars.focus.thickness,
    "--Select-focusedHighlight": (_theme$vars$palette = theme.vars.palette[ownerState.color === "neutral" ? "primary" : ownerState.color]) == null ? void 0 : _theme$vars$palette[500],
    '&:not([data-inverted-colors="false"])': _extends({}, ownerState.instanceColor && {
      "--_Select-focusedHighlight": (_theme$vars$palette2 = theme.vars.palette[ownerState.instanceColor === "neutral" ? "primary" : ownerState.instanceColor]) == null ? void 0 : _theme$vars$palette2[500]
    }, {
      "--Select-focusedHighlight": theme.vars.palette.focusVisible
    }),
    "--Select-indicatorColor": variantStyle != null && variantStyle.backgroundColor ? variantStyle == null ? void 0 : variantStyle.color : theme.vars.palette.text.tertiary
  }, ownerState.size === "sm" && {
    "--Select-minHeight": "2rem",
    "--Select-paddingInline": "0.5rem",
    "--Select-decoratorChildHeight": "min(1.5rem, var(--Select-minHeight))",
    "--Icon-fontSize": theme.vars.fontSize.xl
  }, ownerState.size === "md" && {
    "--Select-minHeight": "2.25rem",
    "--Select-paddingInline": "0.75rem",
    "--Select-decoratorChildHeight": "min(1.75rem, var(--Select-minHeight))",
    "--Icon-fontSize": theme.vars.fontSize.xl2
  }, ownerState.size === "lg" && {
    "--Select-minHeight": "2.75rem",
    "--Select-paddingInline": "1rem",
    "--Select-decoratorChildHeight": "min(2.375rem, var(--Select-minHeight))",
    "--Icon-fontSize": theme.vars.fontSize.xl2
  }, {
    // variables for controlling child components
    "--Select-decoratorChildOffset": "min(calc(var(--Select-paddingInline) - (var(--Select-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Select-decoratorChildHeight)) / 2), var(--Select-paddingInline))",
    "--_Select-paddingBlock": "max((var(--Select-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Select-decoratorChildHeight)) / 2, 0px)",
    "--Select-decoratorChildRadius": "max(var(--Select-radius) - var(--variant-borderWidth, 0px) - var(--_Select-paddingBlock), min(var(--_Select-paddingBlock) + var(--variant-borderWidth, 0px), var(--Select-radius) / 2))",
    "--Button-minHeight": "var(--Select-decoratorChildHeight)",
    "--Button-paddingBlock": "0px",
    // to ensure that the height of the button is equal to --Button-minHeight
    "--IconButton-size": "var(--Select-decoratorChildHeight)",
    "--Button-radius": "var(--Select-decoratorChildRadius)",
    "--IconButton-radius": "var(--Select-decoratorChildRadius)",
    boxSizing: "border-box"
  }, ownerState.variant !== "plain" && {
    boxShadow: theme.shadow.xs
  }, {
    minWidth: 0,
    minHeight: "var(--Select-minHeight)",
    position: "relative",
    display: "flex",
    alignItems: "center",
    borderRadius: "var(--Select-radius)",
    cursor: "pointer"
  }, !(variantStyle != null && variantStyle.backgroundColor) && {
    backgroundColor: theme.vars.palette.background.surface
  }, ownerState.size && {
    paddingBlock: {
      sm: 2,
      md: 3,
      lg: 4
    }[ownerState.size]
    // the padding-block act as a minimum spacing between content and root element
  }, {
    paddingInline: `var(--Select-paddingInline)`
  }, theme.typography[`body-${ownerState.size}`], variantStyle, {
    "&::before": {
      boxSizing: "border-box",
      content: '""',
      display: "block",
      position: "absolute",
      pointerEvents: "none",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      borderRadius: "inherit",
      margin: "calc(var(--variant-borderWidth, 0px) * -1)"
      // for outlined variant
    },
    [`&.${selectClasses_default.focusVisible}`]: {
      "--Select-indicatorColor": variantStyle == null ? void 0 : variantStyle.color,
      "&::before": {
        boxShadow: `inset 0 0 0 var(--Select-focusedThickness) var(--Select-focusedHighlight)`
      }
    },
    [`&.${selectClasses_default.disabled}`]: {
      "--Select-indicatorColor": "inherit"
    }
  }), {
    "&:hover": (_theme$variants2 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants2[ownerState.color],
    [`&.${selectClasses_default.disabled}`]: (_theme$variants3 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants3[ownerState.color]
  }, borderRadius !== void 0 && {
    "--Select-radius": borderRadius
  }];
});
var SelectButton = styled_default("button", {
  name: "JoySelect",
  slot: "Button",
  overridesResolver: (props, styles) => styles.button
})(({
  ownerState
}) => _extends({
  // reset user-agent button style
  border: 0,
  outline: 0,
  background: "none",
  padding: 0,
  fontSize: "inherit",
  color: "inherit",
  alignSelf: "stretch",
  // make children horizontally aligned
  display: "flex",
  alignItems: "center",
  flex: 1,
  fontFamily: "inherit",
  cursor: "pointer",
  whiteSpace: "nowrap",
  overflow: "hidden"
}, (ownerState.value === null || ownerState.value === void 0) && {
  opacity: "var(--Select-placeholderOpacity)"
}, {
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    // TODO: use https://caniuse.com/?search=inset when ~94%
    top: "calc(-1 * var(--variant-borderWidth, 0px))",
    left: "calc(-1 * var(--variant-borderWidth, 0px))",
    right: "calc(-1 * var(--variant-borderWidth, 0px))",
    bottom: "calc(-1 * var(--variant-borderWidth, 0px))",
    borderRadius: "var(--Select-radius)"
  }
}));
var SelectListbox = styled_default(StyledList, {
  name: "JoySelect",
  slot: "Listbox",
  overridesResolver: (props, styles) => styles.listbox
})(({
  theme,
  ownerState
}) => {
  var _theme$variants4;
  const variantStyle = (_theme$variants4 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants4[ownerState.color];
  return _extends({
    "--focus-outline-offset": `calc(${theme.vars.focus.thickness} * -1)`,
    // to prevent the focus outline from being cut by overflow
    "--ListItem-stickyBackground": (variantStyle == null ? void 0 : variantStyle.backgroundColor) || (variantStyle == null ? void 0 : variantStyle.background) || theme.vars.palette.background.popup,
    "--ListItem-stickyTop": "calc(var(--List-padding, var(--ListDivider-gap)) * -1)"
  }, scopedVariables, {
    minWidth: "max-content",
    // prevent options from shrinking if some of them is wider than the Select's root.
    maxHeight: "44vh",
    // the best value from what I tried so far which does not cause screen flicker when listbox is open.
    overflow: "auto",
    outline: 0,
    boxShadow: theme.shadow.md,
    borderRadius: `var(--List-radius, ${theme.vars.radius.sm})`,
    // `unstable_popup-zIndex` is a private variable that lets other component, for example Modal, to override the z-index so that the listbox can be displayed above the Modal.
    zIndex: `var(--unstable_popup-zIndex, ${theme.vars.zIndex.popup})`
  }, !(variantStyle != null && variantStyle.backgroundColor) && {
    backgroundColor: theme.vars.palette.background.popup
  });
});
var SelectStartDecorator = styled_default("span", {
  name: "JoySelect",
  slot: "StartDecorator",
  overridesResolver: (props, styles) => styles.startDecorator
})({
  "--Button-margin": "0 0 0 calc(var(--Select-decoratorChildOffset) * -1)",
  "--IconButton-margin": "0 0 0 calc(var(--Select-decoratorChildOffset) * -1)",
  "--Icon-margin": "0 0 0 calc(var(--Select-paddingInline) / -4)",
  display: "inherit",
  alignItems: "center",
  color: "var(--Select-decoratorColor)",
  marginInlineEnd: "var(--Select-gap)"
});
var SelectEndDecorator = styled_default("span", {
  name: "JoySelect",
  slot: "EndDecorator",
  overridesResolver: (props, styles) => styles.endDecorator
})({
  "--Button-margin": "0 calc(var(--Select-decoratorChildOffset) * -1) 0 0",
  "--IconButton-margin": "0 calc(var(--Select-decoratorChildOffset) * -1) 0 0",
  "--Icon-margin": "0 calc(var(--Select-paddingInline) / -4) 0 0",
  display: "inherit",
  alignItems: "center",
  color: "var(--Select-decoratorColor)",
  marginInlineStart: "var(--Select-gap)"
});
var SelectIndicator = styled_default("span", {
  name: "JoySelect",
  slot: "Indicator"
})(({
  ownerState,
  theme
}) => _extends({}, ownerState.size === "sm" && {
  "--Icon-fontSize": theme.vars.fontSize.lg
}, ownerState.size === "md" && {
  "--Icon-fontSize": theme.vars.fontSize.xl
}, ownerState.size === "lg" && {
  "--Icon-fontSize": theme.vars.fontSize.xl2
}, {
  "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon,
  display: "inherit",
  alignItems: "center",
  marginInlineStart: "var(--Select-gap)",
  marginInlineEnd: "calc(var(--Select-paddingInline) / -4)",
  [`.${selectClasses_default.endDecorator} + &`]: {
    marginInlineStart: "calc(var(--Select-gap) / 2)"
  },
  [`&.${selectClasses_default.expanded}, .${selectClasses_default.disabled} > &`]: {
    "--Icon-color": "currentColor"
  }
}));
var Select = React11.forwardRef(function Select2(inProps, ref) {
  var _ref2, _inProps$disabled, _ref3, _inProps$size, _inProps$color, _formControl$color, _props$slots;
  const props = useThemeProps({
    props: inProps,
    name: "JoySelect"
  });
  const _ref = props, {
    action,
    autoFocus,
    children,
    defaultValue,
    defaultListboxOpen = false,
    disabled: disabledExternalProp,
    getSerializedValue,
    placeholder,
    listboxId,
    listboxOpen: listboxOpenProp,
    onChange,
    onListboxOpenChange,
    onClose,
    renderValue: renderValueProp,
    required = false,
    value: valueProp,
    size: sizeProp = "md",
    variant = "outlined",
    color: colorProp = "neutral",
    startDecorator,
    endDecorator,
    indicator = _Unfold || (_Unfold = (0, import_jsx_runtime7.jsx)(Unfold_default, {})),
    // props to forward to the button (all handlers should go through slotProps.button)
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    id,
    name,
    multiple = false,
    slots = {},
    slotProps = {}
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded3);
  const formControl = React11.useContext(FormControlContext_default);
  if (true) {
    const registerEffect = formControl == null ? void 0 : formControl.registerEffect;
    React11.useEffect(() => {
      if (registerEffect) {
        return registerEffect();
      }
      return void 0;
    }, [registerEffect]);
  }
  const disabledProp = (_ref2 = (_inProps$disabled = inProps.disabled) != null ? _inProps$disabled : formControl == null ? void 0 : formControl.disabled) != null ? _ref2 : disabledExternalProp;
  const size = (_ref3 = (_inProps$size = inProps.size) != null ? _inProps$size : formControl == null ? void 0 : formControl.size) != null ? _ref3 : sizeProp;
  const color = (_inProps$color = inProps.color) != null ? _inProps$color : formControl != null && formControl.error ? "danger" : (_formControl$color = formControl == null ? void 0 : formControl.color) != null ? _formControl$color : colorProp;
  const renderValue = renderValueProp != null ? renderValueProp : defaultRenderValue;
  const [anchorEl, setAnchorEl] = React11.useState(null);
  const rootRef = React11.useRef(null);
  const buttonRef = React11.useRef(null);
  const handleRef = useForkRef(ref, rootRef);
  React11.useImperativeHandle(action, () => ({
    focusVisible: () => {
      var _buttonRef$current;
      (_buttonRef$current = buttonRef.current) == null || _buttonRef$current.focus();
    }
  }), []);
  React11.useEffect(() => {
    setAnchorEl(rootRef.current);
  }, []);
  React11.useEffect(() => {
    if (autoFocus) {
      buttonRef.current.focus();
    }
  }, [autoFocus]);
  const handleOpenChange = React11.useCallback((isOpen) => {
    onListboxOpenChange == null || onListboxOpenChange(isOpen);
    if (!isOpen) {
      onClose == null || onClose();
    }
  }, [onClose, onListboxOpenChange]);
  const {
    buttonActive,
    buttonFocusVisible,
    contextValue,
    disabled,
    getButtonProps,
    getListboxProps,
    getHiddenInputProps,
    getOptionMetadata,
    open: listboxOpen,
    value
  } = useSelect({
    buttonRef,
    defaultOpen: defaultListboxOpen,
    defaultValue,
    disabled: disabledProp,
    getSerializedValue,
    listboxId,
    multiple,
    name,
    required,
    onChange,
    onOpenChange: handleOpenChange,
    open: listboxOpenProp,
    value: valueProp
  });
  const ownerState = _extends({}, props, {
    active: buttonActive,
    defaultListboxOpen,
    disabled,
    focusVisible: buttonFocusVisible,
    open: listboxOpen,
    renderValue,
    value,
    size,
    variant,
    color
  });
  const classes = useUtilityClasses3(ownerState);
  const externalForwardedProps = _extends({}, other, {
    slots,
    slotProps
  });
  const selectedOption = React11.useMemo(() => {
    let selectedOptionsMetadata;
    if (multiple) {
      selectedOptionsMetadata = value.map((v) => getOptionMetadata(v)).filter((o) => o !== void 0);
    } else {
      var _getOptionMetadata;
      selectedOptionsMetadata = (_getOptionMetadata = getOptionMetadata(value)) != null ? _getOptionMetadata : null;
    }
    return selectedOptionsMetadata;
  }, [getOptionMetadata, value, multiple]);
  const [SlotRoot, rootProps] = useSlot("root", {
    ref: handleRef,
    className: classes.root,
    elementType: SelectRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotButton, buttonProps] = useSlot("button", {
    additionalProps: {
      "aria-describedby": ariaDescribedby != null ? ariaDescribedby : formControl == null ? void 0 : formControl["aria-describedby"],
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby != null ? ariaLabelledby : formControl == null ? void 0 : formControl.labelId,
      "aria-required": required ? "true" : void 0,
      id: id != null ? id : formControl == null ? void 0 : formControl.htmlFor,
      name
    },
    className: classes.button,
    elementType: SelectButton,
    externalForwardedProps,
    getSlotProps: getButtonProps,
    ownerState
  });
  const [SlotListbox, listboxProps] = useSlot("listbox", {
    additionalProps: {
      anchorEl,
      open: listboxOpen,
      placement: "bottom",
      keepMounted: true
    },
    className: classes.listbox,
    elementType: SelectListbox,
    externalForwardedProps,
    getSlotProps: getListboxProps,
    ownerState: _extends({}, ownerState, {
      nesting: false,
      row: false,
      wrap: false
    }),
    getSlotOwnerState: (mergedProps) => ({
      size: mergedProps.size || size,
      variant: mergedProps.variant || variant,
      color: mergedProps.color || (!mergedProps.disablePortal ? colorProp : color),
      disableColorInversion: !mergedProps.disablePortal
    })
  });
  const [SlotStartDecorator, startDecoratorProps] = useSlot("startDecorator", {
    className: classes.startDecorator,
    elementType: SelectStartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = useSlot("endDecorator", {
    className: classes.endDecorator,
    elementType: SelectEndDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotIndicator, indicatorProps] = useSlot("indicator", {
    className: classes.indicator,
    elementType: SelectIndicator,
    externalForwardedProps,
    ownerState
  });
  const modifiers = React11.useMemo(() => [...defaultModifiers, ...listboxProps.modifiers || []], [listboxProps.modifiers]);
  let displayValue = placeholder;
  if (Array.isArray(selectedOption) && selectedOption.length > 0 || !Array.isArray(selectedOption) && !!selectedOption) {
    displayValue = renderValue(selectedOption);
  }
  return (0, import_jsx_runtime8.jsxs)(React11.Fragment, {
    children: [(0, import_jsx_runtime8.jsxs)(SlotRoot, _extends({}, rootProps, {
      children: [startDecorator && (0, import_jsx_runtime7.jsx)(SlotStartDecorator, _extends({}, startDecoratorProps, {
        children: startDecorator
      })), (0, import_jsx_runtime7.jsx)(SlotButton, _extends({}, buttonProps, {
        children: displayValue
      })), endDecorator && (0, import_jsx_runtime7.jsx)(SlotEndDecorator, _extends({}, endDecoratorProps, {
        children: endDecorator
      })), indicator && (0, import_jsx_runtime7.jsx)(SlotIndicator, _extends({}, indicatorProps, {
        children: indicator
      })), (0, import_jsx_runtime7.jsx)("input", _extends({}, getHiddenInputProps()))]
    })), anchorEl && (0, import_jsx_runtime7.jsx)(SlotListbox, _extends({}, listboxProps, {
      className: clsx_default(listboxProps.className),
      modifiers
    }, !((_props$slots = props.slots) != null && _props$slots.listbox) && {
      as: Popper,
      slots: {
        root: listboxProps.as || "ul"
      }
    }, {
      children: (0, import_jsx_runtime7.jsx)(SelectProvider, {
        value: contextValue,
        children: (0, import_jsx_runtime7.jsx)(VariantColorProvider, {
          variant,
          color: colorProp,
          children: (0, import_jsx_runtime7.jsx)(GroupListContext_default.Provider, {
            value: "select",
            children: (0, import_jsx_runtime7.jsx)(ListProvider_default, {
              nested: true,
              children
            })
          })
        })
      })
    }))]
  });
});
true ? Select.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.shape({
    current: import_prop_types3.default.shape({
      focusVisible: import_prop_types3.default.func.isRequired
    })
  })]),
  /**
   * If `true`, the select element is focused during the first mount
   * @default false
   */
  autoFocus: import_prop_types3.default.bool,
  /**
   * @ignore
   */
  children: import_prop_types3.default.node,
  /**
   * @ignore
   */
  className: import_prop_types3.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types3.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types3.default.elementType,
  /**
   * If `true`, the select will be initially open.
   * @default false
   */
  defaultListboxOpen: import_prop_types3.default.bool,
  /**
   * The default selected value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types3.default.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types3.default.bool,
  /**
   * Trailing adornment for the select.
   */
  endDecorator: import_prop_types3.default.node,
  /**
   * A function to convert the currently selected value to a string.
   * Used to set a value of a hidden input associated with the select,
   * so that the selected value can be posted with a form.
   */
  getSerializedValue: import_prop_types3.default.func,
  /**
   * The indicator(*) for the select.
   *    ________________
   *   [ value        * ]
   *    ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
   */
  indicator: import_prop_types3.default.node,
  /**
   * `id` attribute of the listbox element.
   * Also used to derive the `id` attributes of options.
   */
  listboxId: import_prop_types3.default.string,
  /**
   * Controls the open state of the select's listbox.
   * @default undefined
   */
  listboxOpen: import_prop_types3.default.bool,
  /**
   * If `true`, selecting multiple values is allowed.
   * This affects the type of the `value`, `defaultValue`, and `onChange` props.
   */
  multiple: import_prop_types3.default.bool,
  /**
   * Name of the element. For example used by the server to identify the fields in form submits.
   */
  name: import_prop_types3.default.string,
  /**
   * Callback fired when an option is selected.
   */
  onChange: import_prop_types3.default.func,
  /**
   * Triggered when focus leaves the menu and the menu should close.
   */
  onClose: import_prop_types3.default.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see listboxOpen).
   */
  onListboxOpenChange: import_prop_types3.default.func,
  /**
   * Text to show when there is no selected value.
   */
  placeholder: import_prop_types3.default.node,
  /**
   * Function that customizes the rendering of the selected value.
   */
  renderValue: import_prop_types3.default.func,
  /**
   * If `true`, the Select cannot be empty when submitting form.
   * @default false
   */
  required: import_prop_types3.default.bool,
  /**
   * The size of the component.
   */
  size: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["sm", "md", "lg"]), import_prop_types3.default.string]),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types3.default.shape({
    button: import_prop_types3.default.elementType,
    endDecorator: import_prop_types3.default.elementType,
    indicator: import_prop_types3.default.elementType,
    listbox: import_prop_types3.default.elementType,
    root: import_prop_types3.default.elementType,
    startDecorator: import_prop_types3.default.elementType
  }),
  /**
   * Leading adornment for the select.
   */
  startDecorator: import_prop_types3.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object]),
  /**
   * The selected value.
   * Set to `null` to deselect all options.
   */
  value: import_prop_types3.default.any,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types3.default.string])
} : void 0;
var Select_default = Select;
export {
  Select_default as default,
  getSelectUtilityClass,
  selectClasses_default as selectClasses
};
//# sourceMappingURL=@mui_joy_Select.js.map
