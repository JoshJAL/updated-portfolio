import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title='Things I Use'>
      <Container marginTop={4}>
        <Title>
          Things I Use <Badge>2023</Badge>
        </Title>
        <P>
          A curated list of the tech that I use. This is a static site built with Astro and React. The site features a
          light and a dark mode. It's purpose is not only to be a place where I can share the tech that I use, but a
          place for people to get to know me a little better. There are posts about the tech that I use, and why I like
          it so much.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub Repository</Meta>
            <Link href='https://github.com/JoshJAL/what-i-use'>
              https://github.com/JoshJAL/what-i-use <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Browsers</Meta>
            <span>Edge/Firefox/Google Chrome/Safari</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Astro, React, Typescript, JavScript, Markdown</span>
          </ListItem>
        </List>

        <WorkImage src='/images/thingsIUse/home-dark.png' alt='Home page dark mode' />
        <WorkImage src='/images/thingsIUse/home-light.png' alt='Home page light mode' />
        <WorkImage src='/images/thingsIUse/audio-dark.png' alt='Audio page dark mode' />
        <WorkImage src='/images/thingsIUse/audio-light.png' alt='Audio page light mode' />
        <WorkImage src='/images/thingsIUse/computers-dark.png' alt='Computers page dark mode' />
        <WorkImage src='/images/thingsIUse/computers-light.png' alt='Computers page light mode' />
        <WorkImage src='/images/thingsIUse/deskware-dark.png' alt='Deskware page dark mode' />
        <WorkImage src='/images/thingsIUse/deskware-light.png' alt='Deskware page light moDe' />
        <WorkImage src='/images/thingsIUse/post-dark.png' alt='Post example dark mode' />
        <WorkImage src='/images/thingsIUse/post-light.png' alt='Post example light mode' />
      </Container>
    </Layout>
  );
};

export default Work;
