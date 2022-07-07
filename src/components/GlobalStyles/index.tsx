import { Global } from '@mantine/core'

const GlobalStyles = () => {
  return (
    <Global
      styles={(theme) => ({
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        },

        '*::before, *::after': {
          boxSizing: 'inherit'
        },

        body: {
          ...theme.fn.fontStyles(),
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          lineHeight: theme.lineHeight
        }
      })}
    />
  )
}

export default GlobalStyles
