import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Joshua Levine</title>
        <link rel="icon" href="/rocket-solid.svg" />
        <meta property='og:description' name="description" content="My Portfolio! Please take some time to learn a little bit about me and don't hesitate to reach out!"/>
        <meta property="og:url" content="https://www.joshualevine.me" />
        <meta property="og:type" content="website" />
        <meta property='og:title' content='Joshua Levine' />
        <meta property="og:image" content={'../../public/images/happyHeadshot.png'} />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
