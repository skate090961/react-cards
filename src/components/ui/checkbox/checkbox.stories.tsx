import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Typography } from '@/components/ui/typography'

import { Checkbox } from './'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: false,
    label: 'Click here',
  },
  render: () => {
    const [checked, setChecked] = useState(false)

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <Checkbox checked={checked} label={'Click me'} onChange={() => setChecked(!checked)} />
        <Typography variant={'h3'}>
          checked:{' '}
          <span style={{ color: `${checked ? 'green' : 'red'}` }}>{checked.toString()}</span>
        </Typography>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Click me',
  },
}
