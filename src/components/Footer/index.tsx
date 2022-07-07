import { Footer as MantineFooter, Text } from '@mantine/core'

const Footer = () => {
  return (
    <MantineFooter
      height={80}
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '0 1rem'
      }}
    >
      <Text>Aerial Ops Challenge by Rodrigo Fernandes</Text>
    </MantineFooter>
  )
}

export default Footer
