import { Header as MantineHeader, Title } from '@mantine/core'

const Header = () => {
  return (
    <MantineHeader
      height={80}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Title order={1}>Aerial Ops Challenge</Title>
    </MantineHeader>
  )
}

export default Header
