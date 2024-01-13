import { CSSProperties, FC } from 'react'

import { getFirstLetter } from '@/common/utils/getFirstLetter'
import { Typography } from '@/components/ui/typography'
import * as RadixAvatar from '@radix-ui/react-avatar'

import s from './avatar.module.scss'

type AvatarProps = {
  className?: string
  imageSrc?: string
  size?: string
  style?: CSSProperties
  userName: string
}

export const Avatar: FC<AvatarProps> = ({
  className,
  imageSrc,
  size = '36px',
  style,
  userName,
}) => {
  const styles = { height: size, width: size, ...style }
  const initials = getFirstLetter(userName)

  return (
    <RadixAvatar.Root className={`${s.root} ${className}`} style={styles}>
      {imageSrc ? (
        <RadixAvatar.Image alt={'User Photo'} className={s.image} src={imageSrc} />
      ) : (
        <RadixAvatar.Fallback className={s.fallback}>
          <Typography variant={'body1'}>{initials}</Typography>
        </RadixAvatar.Fallback>
      )}
    </RadixAvatar.Root>
  )
}
