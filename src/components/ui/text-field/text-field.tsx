import { ComponentProps, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import CloseIcon from '@/assets/icons/CloseIcon'
import EyeIcon from '@/assets/icons/EyeIcon'
import SearchIcon from '@/assets/icons/SearchIcon'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

//TODO: search style, close style, refactoring, onEnter, add icon off, error hover, clx
import s from './text-field.module.scss'

export type TextFieldType = 'password' | 'search' | 'text'

export type TextFieldProps = {
  errorMessage?: string
  label?: string
  onClearClick?: () => void
  type?: TextFieldType
} & ComponentProps<'input'>
type PropsType = TextFieldProps & Omit<ComponentPropsWithoutRef<'input'>, keyof TextFieldProps>
export const TextField = forwardRef<HTMLInputElement, PropsType>(
  ({ className, errorMessage, label, onClearClick, type = 'text', ...rest }, ref) => {
    const isPasswordType = type === 'password'
    const isSearchType = type === 'search'
    const [isShowPassword, setIsShowPassword] = useState<boolean>(isPasswordType)
    const showError = !!errorMessage && errorMessage.length > 0
    const labelDisabledClassName = rest.disabled && s.disabled
    const errorClassName = showError && s.error
    const isShowClearButton = onClearClick && rest.value
    const passwordHandler = () => setIsShowPassword(prev => !prev)

    return (
      <div className={s.root}>
        <Typography
          as={'label'}
          className={`${s.label} ${labelDisabledClassName}`}
          variant={'body2'}
        >
          {label}
          <div className={s.container}>
            <input
              className={`${s.input} ${errorClassName} ${s[type]} ${className}`}
              ref={ref}
              type={isShowPassword ? 'password' : 'text'}
              {...rest}
            />
            {isPasswordType && (
              <Button
                className={s.button}
                disabled={rest.disabled}
                onClick={passwordHandler}
                variant={'link'}
              >
                <EyeIcon />
              </Button>
            )}
            {isSearchType && <SearchIcon className={s.searchIcon} />}
            {isShowClearButton && (
              <Button className={s.button} onClick={onClearClick} variant={'link'}>
                <CloseIcon />
              </Button>
            )}
            {errorMessage && <Typography variant={'error'}>{errorMessage}</Typography>}
          </div>
        </Typography>
      </div>
    )
  }
)
