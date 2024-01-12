import { FC } from 'react'

import { Typography } from '@/components/ui/typography'
import * as Tabs from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

type TabType = {
  disabled?: boolean
  title: string
  value: string
}
type TabSwitcherProps = {
  className?: string
  defaultValue?: string
  label?: string
  onValueChange: (value: string) => void
  tabs: TabType[]
  value: string
}

export const TabSwitcher: FC<TabSwitcherProps> = ({
  className,
  defaultValue,
  label,
  onValueChange,
  tabs,
  value,
}) => {
  const tabsList = tabs.map(tab => {
    return (
      <Tabs.Trigger className={s.tab} disabled={tab.disabled} key={tab.value} value={tab.value}>
        {tab.title}
      </Tabs.Trigger>
    )
  })

  return (
    <div className={`${s.root} ${className}`}>
      <Typography className={s.label} variant={'body2'}>
        {label}
      </Typography>
      <Tabs.Root defaultValue={defaultValue} onValueChange={onValueChange} value={value}>
        <Tabs.List className={s.tabs}>{tabsList}</Tabs.List>
      </Tabs.Root>
    </div>
  )
}
