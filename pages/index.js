import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioYear, BioSection } from '../components/bio'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
          marginTop={4}
        >
          Hello, I'm a full-stack developer based in Tampa, FL!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Joshua Levine
            </Heading>
            <p>Web Developer and Software Engineer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/headshot.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Joshua is a full-stack developer based in Tampa, Florida. With a
            passion for solving problems, both physical and digital. He began on
            a law school track but his love for computers and desire to
            problem-solve for as many people as possible led him to a career in
            web and software development. When not online he loves tinkering as
            much as possible whether that be building computers or playing board
            games with his family. Currently, he is open to new opportunities
            and can be reached{' '}
            <NextLink href="/contactMe">
              <Link>here</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>
            Born in El Paso, Texas.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Completed the Bachelor's Program for Legal Studies at the University
            of Central Florida
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Employed at Open Palm Law
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Attended Law School at Stetson College of Law
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed Thinkful's Full Stack Web Development Boot Camp
          </BioSection>
        </Section>

        <Section>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Building computers, spending time with my family and learning as
            many new things as I can. I like to stay up to date with the latest
            technology and am always looking for an excuse to work with my hands
            whether that be writing code, building computers, or the occasional
            excuse to work on a car.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
