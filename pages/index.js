import NextLink from 'next/link';
import { Container, Box, Heading, Image, useColorModeValue, Link, Button } from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioYear, BioSection } from '../components/bio';
import Layout from '../components/layouts/article';

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius='lg'
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align='center'
          marginTop={4}
        >
          Hello, I'm a full-stack developer based in Tampa, Florida!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
              Joshua Levine
            </Heading>
            <p>Web Developer and Software Engineer</p>
            <ul style={{ fontSize: 12, marginLeft: 25 }}>
              <li>Bachelors Degree in Legal Studies</li>
              <li>Bilingual: English/Spanish</li>
            </ul>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align='center'>
            <Image
              borderColor='greyAlpha.500'
              borderWidth={2}
              borderStyle='solid'
              maxWidth='100px'
              display='inline-block'
              borderRadius='full'
              src='/images/happyHeadshot.png'
              alt='Profile Image'
            />
          </Box>
        </Box>
        <Box align='center' marginTop='15px' marginBottom='15px'>
          <Link
            style={{
              textDecoration: 'none'
            }}
            href='https://docs.google.com/document/d/1254COJOSGdsHpjNcSXf-VtdDhUxNAaB2nkCgap_aUQk/edit?usp=sharing'
            target='_blank'
          >
            <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
              Resume
            </Button>
          </Link>
        </Box>
        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            About
          </Heading>
          <Paragraph>
            Joshua is a full-stack developer based in Tampa, Florida. With a passion for solving problems, both physical
            and digital. He began on a law school track but his love for computers and desire to problem-solve for as
            many people as possible led him to a career in web and software development. When not online he loves
            tinkering as much as possible whether that be building computers or playing board games with his family.
            Currently, he is open to new opportunities, freelance work, and collaboration projects. He can be reached{' '}
            <NextLink href='/contactMe'>
              <Link>here</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align='center' my={4}>
            <NextLink href='/projects'>
              <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
                Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            Bio
          </Heading>
          <BioSection>
            <BioYear>2022</BioYear>
            Working at Rob Graham Enterprises as a Javascript Web Developer
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Certified by Thinkful as Full Stack Web Developer
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Student at Stetson College of Law
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Legal Intern at Open Palm Law
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Received Bachelor's Degree for Legal Studies at the University of Central Florida
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Vice President of Internal Affairs for the Interfraternal Council at the University of Central Florida
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            President of Alpha Epsilon Pi at University of Central Florida
          </BioSection>
          <BioSection>
            <BioYear>1997</BioYear>
            Born in El Paso, Texas
          </BioSection>
        </Section>
        <Section>
          <Heading as='h3' variant='section-title'>
            What makes me happy
          </Heading>
          <Paragraph>
            Building computers, staying up to date with the latest technology, and spending time with my family.
          </Paragraph>
          <br />
          <Paragraph>
            I am always looking for an excuse to work with my hands whether that be writing code, tinkering with cars or
            computers, and/or helping my family with a house project.
          </Paragraph>
          <br />
          <Paragraph>In my free time I enjoy playing board games, playing video games, and watching movies.</Paragraph>
        </Section>
        <Box align='center' marginTop='15px' marginBottom='15px'>
          <Link
            style={{
              textDecoration: 'none'
            }}
            href='https://things-i-use.vercel.app/'
            target='_blank'
          >
            <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
              Things I Use
            </Button>
          </Link>
        </Box>
      </Container>
    </Layout>
  );
};

export default Page;
