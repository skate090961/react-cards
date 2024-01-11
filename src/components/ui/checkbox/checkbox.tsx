import { FC } from 'react'

import CheckIcon from '@/assets/icons/CheckIcon'
import { Typography } from '@/components/ui/typography'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'
//TODO: focus-within, label + hover, clsx, disabled
type CheckboxProps = {
  checked: boolean
  disabled?: boolean
  label?: string
  onChange: (checked: boolean) => void
}

export const Checkbox: FC<CheckboxProps> = ({ checked, disabled, label, onChange }) => (
  <div className={s.root}>
    <Typography as={'label'} className={`${s.label} ${disabled && s.disabled}`}>
      <div className={`${s.checkboxWrapper} ${disabled && s.disabled}`}>
        <RadixCheckbox.Root checked={checked} className={s.checkbox} onCheckedChange={onChange}>
          <RadixCheckbox.Indicator asChild className={`${s.indicator} ${disabled && s.disabled}`}>
            <CheckIcon />
          </RadixCheckbox.Indicator>
          <div className={`${s.unCheck} ${disabled && s.disabled}`}></div>
        </RadixCheckbox.Root>
      </div>
      {label}
    </Typography>
  </div>
)
