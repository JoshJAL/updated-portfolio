import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title='adminDashboard'>
      <Container marginTop={4}>
        <Title>
          Text Editor <Badge>2023</Badge>
        </Title>
        <P>
          A simple text editor written in Java that allows the user to open, edit and save text files. The user can also
          change the font size, font style and font color.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub Repository</Meta>
            <Link href='https://github.com/JoshJAL/JavaTextEditor'>
              https://github.com/JoshJAL/JavaTextEditor <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Java</span>
          </ListItem>
        </List>

        <WorkImage src='/images/JavaTextEditor/firstOpen.png' alt='Java Text Editor first open' />
        <WorkImage src='/images/JavaTextEditor/someText.png' alt='Java Text Editor with some text' />
        <WorkImage
          src='/images/JavaTextEditor/fontSize.png'
          alt='Java Text Editor with and some text with font size changed'
        />
        <WorkImage src='/images/JavaTextEditor/colorPicker.png' alt='Java Text Editor font color picker' />
        <WorkImage
          src='/images/JavaTextEditor/fontColor.png'
          alt='Java Text Editor with and some text with font style and font color changed'
        />
        <WorkImage src='/images/JavaTextEditor/fileMenu.png' alt='Java Text Editor file menu' />
        <WorkImage src='/images/JavaTextEditor/openFile.png' alt='Java Text Editor open file dialog' />
        <WorkImage src='/images/JavaTextEditor/saveFile.png' alt='Java Text Editor save file dialog' />
      </Container>
    </Layout>
  );
};

export default Work;
