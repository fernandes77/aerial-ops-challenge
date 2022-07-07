import Head from 'next/head'

import UserTable from 'components/UserTable'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aerial Ops Challenge - Rodrigo Fernandes</title>
      </Head>
      <UserTable />
    </>
  )
}
