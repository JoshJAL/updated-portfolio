import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title='Periodic Tables'>
      <Container marginTop={4}>
        <Title>
          Periodic Tables <Badge>2022</Badge>
        </Title>
        <P>
          A restaurant reservation system for a fictional restaurant. The user is able to create reservations for a
          specific date and time. The user is also able to assign a reservation to a specific table on a specific date
          as well as create new tables as needed.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub Repository</Meta>
            <Link href='https://github.com/JoshJAL/restaurant_reservation_system'>
              https://github.com/JoshJAL/restaurant_reservation_system <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Browsers</Meta>
            <span>Edge/Firefox/Google Chrome/Safari</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, PostgreSQL, React</span>
          </ListItem>
        </List>

        <WorkImage src='/images/periodicTables/periodicHomePage.jpg' alt='Periodic Tables Home Page' />
        <WorkImage src='/images/periodicTables/periodicPreviousDate.jpg' alt='Periodic Tables past date' />
        <WorkImage src='/images/periodicTables/periodicFutureDate.jpg' alt='Periodic Tables future date' />
        <WorkImage src='/images/periodicTables/periodicNewReservation.jpg' alt='Periodic Tables new reservation page' />
        <WorkImage
          src='/images/periodicTables/periodicEditReservationPage.jpg'
          alt='Periodic Tables edit reservation page'
        />
        <WorkImage src='/images/periodicTables/periodicSearchEmpty.jpg' alt='Periodic Tables search page empty' />
        <WorkImage src='/images/periodicTables/periodicSearchFilled.jpg' alt='Periodic Tables search page filled' />
        <WorkImage src='/images/periodicTables/periodicSeatPage.jpg' alt='Periodic Tables seat table page' />
        <WorkImage src='/images/periodicTables/periodicNewTable.jpg' alt='Periodic Tables new table page' />
      </Container>
    </Layout>
  );
};

export default Work;
