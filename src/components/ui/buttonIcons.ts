export const buttonIcons = {
  user: '/icons/user.svg',
} as const

export type ButtonIconName = keyof typeof buttonIcons

export const getButtonIcon = (name: ButtonIconName) => buttonIcons[name]
