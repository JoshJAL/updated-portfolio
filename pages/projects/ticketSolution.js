import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title='Ticketing Solution'>
      <Container marginTop={4}>
        <Title>
          Ticketing Solution <Badge>2022</Badge>
        </Title>
        <P>
          A scalable ticketing solution for use within any company or organization. The application is password
          protected and developers are the only ones able to whitelist accounts that can gain access and sign up to use
          the system. Interactions with the application are different based on the type of user; developer, quality
          assurance, or general user.
          <br />
          <br />
          Users can submit tickets that have a title, description, and contain an associated file or image related to
          the project, as well as a priority level for the ticket. Once a ticket is submitted, a slack message is sent
          to notify the developers who can then claim those tickets to work on. All users can see who has claimed any
          individual ticket, but users who have created a ticket have the ability to edit the contents of only their
          ticket if they feel it is necessary. Tickets are organized according to priority level and Emergency Tickets
          have a red border so that they stand out from others that much more.
          <br />
          <br />
          Developers can see tickets that they have claimed on a separate page as well as set a complexity level that
          they feel is appropriate for the individual ticket. Once the ticket is ready developers can send the ticket
          over the the quality assurance team, who are also notified by a slack message, for review along with any
          associated URLs.
          <br />
          <br />
          Once the ticket has been reviewed by the quality assurance team they can send it back with any notes they
          might have regarding the ticket. Developers can see which member of the quality assurance team has reviewed
          their ticket in case they need to communicate directly. Once a ticket has been completed the developer can
          click the completed button, removing the ticket from the queue.
          <br />
          <br />
          If a ticket has a complexity level of 13 developers will be given the option to turn the ticket into a kanban
          project where they can create separate tasks amongst the developer team and and tackle the problem together.{' '}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub Repository</Meta>
            <Link href='https://github.com/JoshJAL/ticketingSolution'>
              https://github.com/JoshJAL/ticketingSolution <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Browsers</Meta>
            <span>Edge/Firefox/Google Chrome/Safari</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, TypeScript, JavaScript, Next.js, and CSS</span>
          </ListItem>
        </List>

        <WorkImage src='/images/ticketingSolution/signUp.jpg' alt='Ticketing Solution Sign Up Page' />
        <WorkImage src='/images/ticketingSolution/login.jpg' alt='Ticketing Solution Login Page' />
        <WorkImage src='/images/ticketingSolution/ticketForm.jpg' alt='Ticketing Solution Home Page/Ticket Form Page' />
        <WorkImage src='/images/ticketingSolution/allTicketsPage.jpg' alt='Ticketing Solution All Tickets Page' />
        <WorkImage
          src='/images/ticketingSolution/developerTicketsPage.jpg'
          alt='Ticketing Solution Developer Tickets Page'
        />
        <WorkImage
          src='/images/ticketingSolution/ticketWhenBeingSentToQA.jpg'
          alt='Ticketing Solution Ticket When Being Sent To Quality Assurance'
        />
        <WorkImage
          src='/images/ticketingSolution/qaReviewTicketPage.jpg'
          alt='Ticketing Solution Quality Assurance Review Page'
        />
        <WorkImage
          src='/images/ticketingSolution/ticketWithOptionToSendNotes.jpg'
          alt='Ticketing Solution Quality Assurance Ticket With Option To Send Notes'
        />
        <WorkImage src='/images/ticketingSolution/createUserPage.jpg' alt='Ticketing Solution Create User Page' />
        <WorkImage src='/images/ticketingSolution/kanbanTables.jpg' alt='Ticketing Solution Kanban Tables Page' />
        <WorkImage
          src='/images/ticketingSolution/populatedKanbanTable.jpg'
          alt='Ticketing Solution Populated Kanban Table'
        />
        <WorkImage
          src='/images/ticketingSolution/openedTask.jpg'
          alt='Ticketing Solution Opened Task On Kanban Table'
        />
      </Container>
    </Layout>
  );
};

export default Work;
