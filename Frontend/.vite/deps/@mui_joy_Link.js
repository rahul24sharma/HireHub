"use client";
import "./chunk-6PDOWS5J.js";
import "./chunk-TAM2IQJX.js";
import "./chunk-5R73M5S6.js";
import "./chunk-5OU24SLN.js";
import "./chunk-WUJAI72V.js";
import "./chunk-ZIYUGMGG.js";
import {
  TypographyInheritContext,
  TypographyNestedContext
} from "./chunk-CITUDYNU.js";
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
  useForkRef,
  useIsFocusVisible
} from "./chunk-WHHWRBLL.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  capitalize,
  composeClasses,
  extendSxProp,
  init_extends,
  isMuiElement,
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

// node_modules/@mui/joy/Link/Link.js
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/joy/Link/linkClasses.js
function getLinkUtilityClass(slot) {
  return generateUtilityClass("MuiLink", slot);
}
var linkClasses = generateUtilityClasses("MuiLink", ["root", "disabled", "focusVisible", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "focusVisible", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "underlineNone", "underlineHover", "underlineAlways", "h1", "h2", "h3", "h4", "title-lg", "title-md", "title-sm", "body-lg", "body-md", "body-sm", "body-xs", "startDecorator", "endDecorator"]);
var linkClasses_default = linkClasses;

// node_modules/@mui/joy/Link/Link.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["color", "textColor", "variant"];
var _excluded2 = ["children", "disabled", "onBlur", "onFocus", "level", "overlay", "underline", "endDecorator", "startDecorator", "component", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    level,
    color,
    variant,
    underline,
    focusVisible,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", color && `color${capitalize(color)}`, disabled && "disabled", focusVisible && "focusVisible", level, underline && `underline${capitalize(underline)}`, variant && `variant${capitalize(variant)}`],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"]
  };
  return composeClasses(slots, getLinkUtilityClass, {});
};
var StartDecorator = styled_default("span", {
  name: "JoyLink",
  slot: "StartDecorator",
  overridesResolver: (props, styles) => styles.startDecorator
})(({
  ownerState
}) => {
  var _ownerState$sx;
  return _extends({
    display: "inline-flex",
    marginInlineEnd: "clamp(4px, var(--Link-gap, 0.375em), 0.75rem)"
  }, typeof ownerState.startDecorator !== "string" && (ownerState.alignItems === "flex-start" || ((_ownerState$sx = ownerState.sx) == null ? void 0 : _ownerState$sx.alignItems) === "flex-start") && {
    marginTop: "2px"
    // this makes the alignment perfect in most cases
  });
});
var EndDecorator = styled_default("span", {
  name: "JoyLink",
  slot: "endDecorator",
  overridesResolver: (props, styles) => styles.endDecorator
})(({
  ownerState
}) => {
  var _ownerState$sx2;
  return _extends({
    display: "inline-flex",
    marginInlineStart: "clamp(4px, var(--Link-gap, 0.25em), 0.5rem)"
  }, typeof ownerState.startDecorator !== "string" && (ownerState.alignItems === "flex-start" || ((_ownerState$sx2 = ownerState.sx) == null ? void 0 : _ownerState$sx2.alignItems) === "flex-start") && {
    marginTop: "2px"
    // this makes the alignment perfect in most cases
  });
});
var LinkRoot = styled_default("a", {
  name: "JoyLink",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$vars$palette, _theme$vars$palette2, _theme$vars$palette3, _theme$variants$owner, _theme$variants, _theme$variants2, _theme$variants3;
  return [_extends({
    "--Icon-fontSize": "1.25em",
    "--Icon-color": "currentColor",
    "--CircularProgress-size": "1.25em",
    "--CircularProgress-thickness": "3px"
  }, ownerState.level && ownerState.level !== "inherit" && theme.typography[ownerState.level], ownerState.level === "inherit" && {
    font: "inherit"
  }, ownerState.underline === "none" && {
    textDecoration: "none"
  }, ownerState.underline === "hover" && {
    textDecoration: "none",
    "&:hover": {
      "@media (hover: hover)": {
        textDecorationLine: "underline"
      }
    }
  }, ownerState.underline === "always" && {
    textDecoration: "underline"
  }, ownerState.startDecorator && {
    verticalAlign: "bottom"
    // to make the link align with the parent's content
  }, {
    textDecorationThickness: "max(0.08em, 1px)",
    // steal from https://moderncss.dev/modern-css-for-dynamic-component-based-architecture/#css-reset-additions
    textUnderlineOffset: "0.15em",
    // steal from https://moderncss.dev/modern-css-for-dynamic-component-based-architecture/#css-reset-additions
    display: "inline-flex",
    alignItems: "center",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: theme.vars.radius.xs,
    padding: 0,
    // Remove the padding in Firefox
    cursor: "pointer",
    textDecorationColor: `var(--variant-outlinedBorder, rgba(${(_theme$vars$palette = theme.vars.palette[ownerState.color]) == null ? void 0 : _theme$vars$palette.mainChannel} / var(--Link-underlineOpacity, 0.72)))`
  }, ownerState.variant ? _extends({
    paddingBlock: "min(0.1em, 4px)",
    paddingInline: "0.25em"
  }, !ownerState.nesting && {
    marginInline: "-0.25em"
  }) : {
    color: `var(--variant-plainColor, rgba(${(_theme$vars$palette2 = theme.vars.palette[ownerState.color]) == null ? void 0 : _theme$vars$palette2.mainChannel} / 1))`,
    [`&.${linkClasses_default.disabled}`]: {
      pointerEvents: "none",
      color: `var(--variant-plainDisabledColor, rgba(${(_theme$vars$palette3 = theme.vars.palette[ownerState.color]) == null ? void 0 : _theme$vars$palette3.mainChannel} / 0.6))`
    }
  }, {
    userSelect: ownerState.component === "button" ? "none" : void 0,
    MozAppearance: "none",
    // Reset
    WebkitAppearance: "none",
    // Reset
    "&::-moz-focus-inner": {
      borderStyle: "none"
      // Remove Firefox dotted outline.
    }
  }, ownerState.overlay ? {
    position: "initial",
    "&::after": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      borderRadius: `var(--unstable_actionRadius, inherit)`,
      margin: `var(--unstable_actionMargin)`
    },
    [`${theme.focus.selector}`]: {
      "&::after": theme.focus.default
    }
  } : {
    position: "relative",
    [theme.focus.selector]: theme.focus.default
  }), ownerState.variant && _extends({}, (_theme$variants$owner = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants$owner[ownerState.color], {
    "&:hover": {
      "@media (hover: hover)": (_theme$variants = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants[ownerState.color]
    },
    "&:active": (_theme$variants2 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants2[ownerState.color],
    [`&.${linkClasses_default.disabled}`]: (_theme$variants3 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants3[ownerState.color]
  })];
});
var Link = React.forwardRef(function Link2(inProps, ref) {
  const _useThemeProps = useThemeProps({
    props: inProps,
    name: "JoyLink"
  }), {
    color = "primary",
    textColor,
    variant
  } = _useThemeProps, themeProps = _objectWithoutPropertiesLoose(_useThemeProps, _excluded);
  const nesting = React.useContext(TypographyNestedContext);
  const inheriting = React.useContext(TypographyInheritContext);
  const props = extendSxProp(_extends({}, themeProps, {
    color: textColor
  }));
  const {
    children,
    disabled = false,
    onBlur,
    onFocus,
    level: levelProp = "body-md",
    overlay = false,
    underline = "hover",
    endDecorator,
    startDecorator,
    component,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const level = nesting || inheriting ? inProps.level || "inherit" : levelProp;
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = React.useState(false);
  const handleRef = useForkRef(ref, focusVisibleRef);
  const handleBlur = (event) => {
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  };
  const handleFocus = (event) => {
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  const ownerState = _extends({}, props, {
    color,
    disabled,
    focusVisible,
    underline,
    variant,
    level,
    overlay,
    nesting
  });
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    additionalProps: {
      onBlur: handleBlur,
      onFocus: handleFocus
    },
    ref: handleRef,
    className: classes.root,
    elementType: LinkRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotStartDecorator, startDecoratorProps] = useSlot("startDecorator", {
    className: classes.startDecorator,
    elementType: StartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = useSlot("endDecorator", {
    className: classes.endDecorator,
    elementType: EndDecorator,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime.jsx)(TypographyNestedContext.Provider, {
    value: true,
    children: (0, import_jsx_runtime2.jsxs)(SlotRoot, _extends({}, rootProps, {
      children: [startDecorator && (0, import_jsx_runtime.jsx)(SlotStartDecorator, _extends({}, startDecoratorProps, {
        children: startDecorator
      })), isMuiElement(children, ["Skeleton"]) ? React.cloneElement(children, {
        variant: children.props.variant || "inline"
      }) : children, endDecorator && (0, import_jsx_runtime.jsx)(SlotEndDecorator, _extends({}, endDecoratorProps, {
        children: endDecorator
      }))]
    }))
  });
});
true ? Link.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * The color of the link.
   * @default 'primary'
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types.default.bool,
  /**
   * Element placed after the children.
   */
  endDecorator: import_prop_types.default.node,
  /**
   * Applies the theme typography styles.
   * @default 'body-md'
   */
  level: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["body1", "body2", "body3", "h1", "h2", "h3", "h4", "h5", "h6", "inherit"]), import_prop_types.default.string]),
  /**
   * @ignore
   */
  onBlur: import_prop_types.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types.default.func,
  /**
   * If `true`, the ::after pseudo element is added to cover the area of interaction.
   * The parent of the overlay Link should have `relative` CSS position.
   * @default false
   */
  overlay: import_prop_types.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    endDecorator: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    startDecorator: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    endDecorator: import_prop_types.default.elementType,
    root: import_prop_types.default.elementType,
    startDecorator: import_prop_types.default.elementType
  }),
  /**
   * Element placed before the children.
   */
  startDecorator: import_prop_types.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The system color.
   */
  textColor: import_prop_types.default.any,
  /**
   * Controls when the link should have an underline.
   * @default 'hover'
   */
  underline: import_prop_types.default.oneOf(["always", "hover", "none"]),
  /**
   * Applies the theme link styles.
   * @default 'plain'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types.default.string])
} : void 0;
var Link_default = Link;
export {
  Link_default as default,
  getLinkUtilityClass,
  linkClasses_default as linkClasses
};
//# sourceMappingURL=@mui_joy_Link.js.map
