export const COLOR = {
  PINK: 0,
  BLUE: 1,
  YELLOW: 2,
  PURPLE: 3,
  PEACH: 4,
  GREEN: 5,
  ORANGE: 6,
  BLACK: 7,
  WHITE: 8,
  BACKGROUND: 9,
} as const

export type ColorType = (typeof COLOR)[keyof typeof COLOR]

export const FONT = {
  CAL_MED: 1,
  CAL_SEMIBOLD_I: 2,
  AVENIR_BOOK: 3,
  AVENIR_MED: 4,
  MONO: 5,
} as const

export type FontType = (typeof FONT)[keyof typeof FONT]
