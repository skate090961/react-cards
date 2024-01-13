import { FC } from 'react'

import ChevronDownIcon from '@/assets/icons/ChevronDownIcon'
import { Typography } from '@/components/ui/typography'
import * as RadixSelect from '@radix-ui/react-select'

import s from './select.module.scss'

type Option = { label: string; value: string }

type SelectProps = {
  className?: string
  defaultValue?: string
  disabled?: boolean
  label?: string
  onChange: (value: string) => void
  options: Option[]
  value: string
}

export const Select: FC<SelectProps> = ({
  className,
  defaultValue,
  disabled,
  label,
  onChange,
  options,
  value,
}) => {
  const optionsList = options.map(option => {
    return (
      <RadixSelect.Item className={s.item} key={option.value} value={option.value}>
        <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
      </RadixSelect.Item>
    )
  })

  return (
    <Typography
      as={'label'}
      className={`${s.label} ${disabled ? s.disabled : ''} ${className}`}
      variant={'body2'}
    >
      {label}
      <RadixSelect.Root defaultValue={defaultValue} onValueChange={onChange} value={value}>
        <RadixSelect.Trigger className={s.trigger} disabled={disabled}>
          <RadixSelect.Value />
          <RadixSelect.Icon className={s.icon}>
            <ChevronDownIcon className={disabled ? s.disabled : ''} />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content className={s.content} position={'popper'}>
            <RadixSelect.Viewport>
              <RadixSelect.Group className={s.group}>{optionsList}</RadixSelect.Group>
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </Typography>
  )
}
