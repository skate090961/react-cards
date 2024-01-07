import { Meta, StoryObj } from '@storybook/react'

import { Typography, TypographyVariant } from './'

const typographyVariants: TypographyVariant[] = [
  'large',
  'h1',
  'h2',
  'h3',
  'body1',
  'subtitle1',
  'body2',
  'subtitle2',
  'caption',
  'overline',
  'link1',
  'link2',
]

const meta = {
  component: Typography,
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

const typographyVariantsRender = typographyVariants.map((variant, index) => (
  <tr key={index} style={{ paddingBottom: '120px' }}>
    <td
      style={{
        paddingRight: '32px',
        textAlign: 'right',
        textTransform: 'capitalize',
        verticalAlign: 'top',
      }}
    >
      <Typography variant={variant}>{variant}</Typography>
    </td>
    <td>
      <Typography variant={variant}>
        Carosserie Test Zürich <br />
        Stauffacherstrasse 31 <br />
        8004 Zürich, ZH, CH
      </Typography>
    </td>
  </tr>
))

export const AllTypography: Story = {
  render: () => (
    <table style={{ borderSpacing: '0 20px' }}>
      <tbody>{typographyVariantsRender}</tbody>
    </table>
  ),
}

export const SelectTypographyVariant: Story = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: typographyVariants,
    },
  },
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'large',
  },
}
