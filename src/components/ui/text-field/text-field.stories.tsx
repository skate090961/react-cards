import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { TextField } from './'
const meta = {
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['text', 'search', 'password'],
    },
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    label: 'text label',
    placeholder: 'placeholder',
    type: 'text',
  },
}

export const Password: Story = {
  args: {
    disabled: false,
    label: 'password label',
    placeholder: 'placeholder',
    type: 'password',
  },
}

export const Search = {
  render: () => {
    const [state, setState] = useState('')

    return (
      <TextField
        label={'Search text field'}
        onChange={e => setState(e.currentTarget.value)}
        onClearClick={() => setState('')}
        placeholder={'placeholder'}
        type={'search'}
        value={state}
      />
    )
  },
}

export const Invalid: Story = {
  args: {
    errorMessage: 'Error text',
    label: 'invalid label',
    onChange: () => 'some value',
    placeholder: 'placeholder',
    type: 'text',
    value: 'some value',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'disabled label',
    placeholder: 'placeholder',
    type: 'text',
  },
}
