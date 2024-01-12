import type { Meta } from '@storybook/react'

import { useState } from 'react'

import { Typography } from '@/components/ui/typography'

import { TabSwitcher } from './'

const meta = {
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

export default meta

export const Default = {
  render: () => {
    const [value, setValue] = useState('switcher-1')

    return (
      <div>
        <TabSwitcher
          defaultValue={value}
          label={'Tab Switcher Label'}
          onValueChange={value => setValue(value)}
          tabs={[
            { title: 'Switcher 1', value: 'switcher-1' },
            { title: 'Switcher 2', value: 'switcher-2' },
            { title: 'Switcher 3', value: 'switcher-3' },
            { title: 'Switcher 4', value: 'switcher-4' },
            { disabled: true, title: 'Switcher 5', value: 'switcher-5' },
          ]}
          value={value}
        />
        <Typography as={'div'} style={{ marginTop: '15px' }} variant={'body2'}>
          value: {value}
        </Typography>
      </div>
    )
  },
}
