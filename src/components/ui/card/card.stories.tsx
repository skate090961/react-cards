import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import { Card } from './'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Card style={{ height: '550px', width: '420px' }}></Card>,
}

export const CardWithContent: Story = {
  render: () => (
    <Card style={{ padding: '36px', textAlign: 'center' }}>
      <Typography variant={'large'}>Title</Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </Typography>
      <Button variant={'primary'}>Primary Button</Button>
    </Card>
  ),
}
