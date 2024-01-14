import type { Meta } from '@storybook/react'

import { useState } from 'react'

import { Typography } from '@/components/ui/typography'

import { RadioGroup } from './'

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta

export const Default = {
  render: () => {
    const options = [
      { label: 'Radio one', value: '1' },
      { label: 'Radio two', value: '2' },
      { label: 'Radio three', value: '3' },
      { label: 'Radio four', value: '4' },
    ]
    const [value, setValue] = useState<string>('1')

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <RadioGroup
          disabled={false}
          onChange={(value: string) => setValue(value)}
          options={options}
          value={value}
        />
        <Typography variant={'body1'}>Radio value: {value}</Typography>
      </div>
    )
  },
}

export const RadioGroupDisabled = {
  args: {
    disabled: true,
    options: [
      { label: 'Radio one', value: '1' },
      { label: 'Radio two', value: '2' },
      { label: 'Radio three', value: '3' },
      { label: 'Radio four', value: '4' },
    ],
    value: '1',
  },
}
