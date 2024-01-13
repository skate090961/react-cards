import type { Meta } from '@storybook/react'

import { useState } from 'react'

import { Typography } from '@/components/ui/typography'

import { Select } from './'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta

const options = [
  { label: 'Select 1', value: 'select-1' },
  { label: 'Select 2', value: 'select-2' },
  { label: 'Select 3', value: 'select-3' },
  { label: 'Select 4', value: 'select-4' },
  { label: 'Select 5', value: 'select-5' },
]

export const Default = {
  render: () => {
    const [value, setValue] = useState<string>('select-1')

    return (
      <div>
        <Select onChange={value => setValue(value)} options={options} value={value} />
        <Typography style={{ marginTop: '15px' }} variant={'body2'}>
          Selected value: {value}
        </Typography>
      </div>
    )
  },
}

export const SelectWithLabel = {
  render: () => {
    const [value, setValue] = useState<string>('select-1')

    return (
      <div>
        <Select
          label={'Select label'}
          onChange={value => setValue(value)}
          options={options}
          value={value}
        />
        <Typography style={{ marginTop: '15px' }} variant={'body2'}>
          Selected value: {value}
        </Typography>
      </div>
    )
  },
}

export const Small = {
  render: () => {
    const [value, setValue] = useState<string>('select-1')

    return (
      <div style={{ width: '210px' }}>
        <Select
          label={'Select label'}
          onChange={value => setValue(value)}
          options={options}
          value={value}
        />
        <Typography style={{ marginTop: '15px' }} variant={'body2'}>
          Selected value: {value}
        </Typography>
      </div>
    )
  },
}
export const Disabled = {
  render: () => (
    <Select
      disabled
      label={'Select label'}
      onChange={() => {}}
      options={options}
      value={'select-1'}
    />
  ),
}
