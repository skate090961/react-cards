import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './card.module.scss'

export type CardProps<T extends ElementType = 'div'> = {
  as?: T
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>(
  props: CardProps<T> & ComponentPropsWithoutRef<T>
) => {
  const { as: Component = 'div', className, ...rest } = props
  const finalClassName = `${s.card} ${className}`

  return <Component className={finalClassName} {...rest} />
}
