import { TThemeTypographyKey } from "../../theme/theme";

//  STYLE VARIANT TYPES
//
//  style variants:                primary                               secondary
//                               /        \                            /          \
//                              /          \                          /            \
//  states:               enabled          disabled             enabled            disabled
//                        /  |  \          /  |  \              /  |  \             /  |  \
//                       /   |   \        /   |   \            /   |   \           /   |   \
//  interractions:  active hover none  active hover none   active hover none  active hover none

type TButtonInterractionStyles = {
  // none
  noneBackgroundColor: string;
  noneFontColor: string;

  // hover
  hoverBackgroundColor: string;
  hoverFontColor: string;

  // active
  activeBackgroundColor: string;
  activeFontColor: string;
};

export type TButtonStates = {
  enabled: TButtonInterractionStyles;
  disabled: TButtonInterractionStyles;
};

export type TButtonStyleVariants = {
  primary: TButtonStates;
  secondary: TButtonStates;
};

//  SIZE VARIANT TYPES
//  size variants: large  small

type TButtonSizeVariantStyles = {
  fontVariant: TThemeTypographyKey;
  padding: string;
};

export type TButtonSizeVariants = {
  large: TButtonSizeVariantStyles;
  small: TButtonSizeVariantStyles;
};

// BUTTON STRUCTURE
export type TButtons = {
  styleVariants: TButtonStyleVariants;
  sizeVariants: TButtonSizeVariants;
};
