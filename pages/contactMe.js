import {
  Container,
  Heading,
  List,
  ListItem,
  Link,
  Button,
  Icon
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoGoogle
} from 'react-icons/io5'

const ContactMe = () => (
  <Layout>
    <Container>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contact Info
        </Heading>
        <Paragraph>
          I'm currently looking for new opportunities. If you're interested in
          reaching out to me for work, to collaborate on a project, or simply to
          connect please feel free to click on one of the links listed below!
          The best way to reach me is via email or LinkedIn. I do not post much
          on social media, but I do promise that I am actively engaged with
          anyone who reaches out.
        </Paragraph>
        <br />
        <List>
          <ListItem>
            <Link href="https://www.linkedin.com/in/josh-lev/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                Joshua Levine
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://mail.google.com/mail/?view=cm&source=mailto&to=joshuaalevine3@gmail.com
"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGoogle} />}
              >
                Gmail
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/JoshJAL" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @JoshJAL
              </Button>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link href="https://twitter.com/mygovtname" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @MyGovtName
              </Button>
            </Link>
          </ListItem> */}
          <ListItem>
            <Link
              href="https://www.instagram.com/joshuaalevine3/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @JoshuaALevine3
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.facebook.com/joshua.levine.520"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoFacebook} />}
              >
                Facebook
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default ContactMe
