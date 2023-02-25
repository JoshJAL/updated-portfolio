import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Java Calculator">
      <Container marginTop={4}>
        <Title>
          Calculator in Java <Badge>2023</Badge>
        </Title>
        <P>
          A simple calculator application written in Java. The calculator can
          perform basic arithmetic operations like addition, subtraction,
          multiplication, and division.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub Repository</Meta>
            <Link href="https://github.com/JoshJAL/JavaCalculator">
            https://github.com/JoshJAL/JavaCalculator{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Java</span>
          </ListItem>
        </List>

        <WorkImage
          src="/images/javaCalc/home.jpg"
          alt="Starting screen of calculator"
        />
        <WorkImage
          src="/images/javaCalc/input.jpg"
          alt="Number inputted into calculator"
        />
        <WorkImage
          src="/images/javaCalc/subtract.jpg"
          alt="Number being subtracted from previous number in calculator"
        />
        <WorkImage
          src="/images/javaCalc/result.jpg"
          alt="Result of calculation in calculator"
        />
      </Container>
    </Layout>
  )
}

export default Work
