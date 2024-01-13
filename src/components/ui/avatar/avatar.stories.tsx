import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './'

const meta = {
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    imageSrc:
      'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    userName: 'Maksim',
  },
}

export const AvatarWithoutImage: Story = {
  args: {
    userName: 'Maksim',
  },
}

export const Size: Story = {
  args: {
    imageSrc:
      'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    userName: 'Maksim',
  },
  render: () => {
    const image =
      'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'

    return (
      <div style={{ alignItems: 'center', display: 'flex', gap: '15px' }}>
        <Avatar imageSrc={image} userName={'Maksim'} />
        <Avatar imageSrc={image} size={'72px'} userName={'Maksim'} />
        <Avatar imageSrc={image} size={'144px'} userName={'Maksim'} />
      </div>
    )
  },
}
