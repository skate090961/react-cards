import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'

import s from './button.module.scss'

type ButtonVariant = 'link' | 'primary' | 'secondary' | 'tertiary'
export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    variant = 'primary',
    ...rest
  } = props
  const finalClassName = `${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`
  const linkVariant = variant === 'link' ? 'subtitle1' : 'subtitle2'

  return (
    <Component className={finalClassName} {...rest}>
      <Typography className={s.typography} variant={linkVariant}>
        {children}
      </Typography>
    </Component>
  )
}
