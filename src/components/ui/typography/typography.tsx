import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

export type TypographyVariant =
  | 'body1'
  | 'body2'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'large'
  | 'link1'
  | 'link2'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  children: ReactNode
  className?: string
  variant?: TypographyVariant
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { as: Component = 'p', className, variant = 'body1', ...rest } = props

  return <Component className={`${s.typography} ${s[variant]} ${className}`} {...rest} />
}
