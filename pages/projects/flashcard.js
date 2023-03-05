import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title='Flashcard'>
      <Container marginTop={4}>
        <Title>
          Flashcard-O-Matic <Badge>2022</Badge>
        </Title>
        <P>
          A flashcard making app for taking notes and studying any subject. Moving into as digitally focused an age as
          we are, I believe that it is time to start upgrading our ways of studying. This app allows for the user to
          create decks of flashcards focused on any subject there are front and back parts of the card for the user to
          utilize in any way that they wish. The user can create, delete and edit flashcards and decks as they see fit.
          There is a breadcrumb feature at the top of each page to ensure that the user is always able to revert to any
          page if they wish to do so.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub Repository</Meta>
            <Link href='https://github.com/JoshJAL/FlashCards'>
              https://github.com/JoshJAL/FlashCards <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Browsers</Meta>
            <span>Edge/Firefox/Google Chrome/Safari</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS and React</span>
          </ListItem>
        </List>

        <WorkImage src='/images/Flashcard-O-Matic/flashcardOMaticHomePage.jpg' alt='Flashcard-O-Matic home page' />
        <WorkImage src='/images/Flashcard-O-Matic/viewDeckPage.jpg' alt='Flashcard-O-Matic view deck page' />
        <WorkImage src='/images/Flashcard-O-Matic/createDeckPage.jpg' alt='Flashcard-O-Matic create deck page' />
        <WorkImage src='/images/Flashcard-O-Matic/editDeckPage.jpg' alt='Flashcard-O-Matic edit deck page' />
        <WorkImage src='/images/Flashcard-O-Matic/studyDeckPage1.jpg' alt='Flashcard-O-Matic view front of card page' />
        <WorkImage src='/images/Flashcard-O-Matic/studyDeckPage2.jpg' alt='Flashcard-O-Matic view back of card page' />
        <WorkImage
          src='/images/Flashcard-O-Matic/studyDeckConfirmation.jpg'
          alt='Flashcard-O-Matic finish deck confirmation popup'
        />
        <WorkImage src='/images/Flashcard-O-Matic/editCardPage.jpg' alt='Flashcard-O-Matic edit card page' />
        <WorkImage src='/images/Flashcard-O-Matic/addCardPage.jpg' alt='Flashcard-O-Matic add card page' />
      </Container>
    </Layout>
  );
};

export default Work;
