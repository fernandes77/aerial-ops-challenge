import { MantineProvider } from '@mantine/core'
import { AppShell } from '@mantine/core'

import GlobalStyles from 'components/GlobalStyles'
import Header from 'components/Header'
import Footer from 'components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider>
      <AppShell header={<Header />} footer={<Footer />}>
        <GlobalStyles />
        <Component {...pageProps} />
      </AppShell>
    </MantineProvider>
  )
}

export default MyApp
