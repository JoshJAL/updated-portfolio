import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title='Simple Calculator'>
      <Container marginTop={4}>
        <Title>
          Simple Calculator <Badge>2022</Badge>
        </Title>
        <P>
          A simple calculator application that can add, subtract, multiply and divide. Intended for simple mathematical
          problems.{' '}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Working Application</Meta>
            <Link href='https://joshjal.github.io/simpleCalculator/'>
              https://joshjal.github.io/simpleCalculator/ <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>GitHub Repository</Meta>
            <Link href='https://github.com/JoshJAL/simpleCalculator'>
              https://github.com/JoshJAL/simpleCalculator <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Browsers</Meta>
            <span>Edge/Firefox/Google Chrome/Safari</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, JavaScript, and CSS</span>
          </ListItem>
        </List>

        <WorkImage src='/images/simpleCalc/simpleCalcHome.jpg' alt='Simple Calculator home page' />
        <WorkImage
          src='/images/simpleCalc/simpleCalcMultiplication.jpg'
          alt='Simple Calculator with multiplication problem'
        />
        <WorkImage src='/images/simpleCalc/simpleCalcAnswer.jpg' alt='Simple Calculator displaying answer' />
      </Container>
    </Layout>
  );
};

export default Work;
