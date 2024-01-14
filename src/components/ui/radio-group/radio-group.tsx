import { FC } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

type Option = {
  label: string
  value: string
}
type RadioGroupProps = {
  disabled?: boolean
  onChange: (value: string) => void
  options: Option[]
  value: string
}

export const RadioGroup: FC<RadioGroupProps> = ({ disabled, onChange, options, value }) => {
  const optionsList = options.map(option => {
    return (
      <Typography
        as={'label'}
        className={`${s.label} ${disabled ? s.disabled : ''}`}
        variant={'body2'}
      >
        <RadixRadioGroup.Item className={s.item} value={option.value}>
          <div className={s.fake}></div>
          <RadixRadioGroup.Indicator className={s.indicator} />
        </RadixRadioGroup.Item>
        {option.label}
      </Typography>
    )
  })

  return (
    <RadixRadioGroup.Root
      className={s.root}
      disabled={disabled}
      onValueChange={onChange}
      value={value}
    >
      {optionsList}
    </RadixRadioGroup.Root>
  )
}
