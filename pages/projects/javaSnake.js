import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title='Java Snake'>
      <Container marginTop={4}>
        <Title>
          Snake in Java <Badge>2023</Badge>
        </Title>
        <P>
          The classic game of Snake. The player controls a snake that moves around the screen and eats apples. This
          program is written in Java and uses the Java Swing library to create the GUI.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub Repository</Meta>
            <Link href='https://github.com/JoshJAL/JavaSnake'>
              https://github.com/JoshJAL/JavaSnake <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Java</span>
          </ListItem>
        </List>

        <WorkImage src='/images/JavaSnake/gameRunning.jpg' alt='Game of Snake Running' />
        <WorkImage src='/images/JavaSnake/gameOver.jpg' alt='Game over screen of Snake' />
      </Container>
    </Layout>
  );
};

export default Work;
