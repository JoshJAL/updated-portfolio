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
          Admin Dashboard <Badge>2023</Badge>
        </Title>
        <P>
          An admin dashboard for a fake e-commerce website. This dashboard will allow the admin to view, create, edit
          and delete products, categories and users. The admin will also be able to view the orders that have been
          placed and change the status of the order. The admin will also be able to view the analytics of the website.
          <br />
          <br />
          This features a light and a dark mode to fit the users preference.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Hosted Application</Meta>
            <Link href='https://admin-dashboard-six-lake.vercel.app/'>
              https://admin-dashboard-six-lake.vercel.app/ <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>GitHub Repository</Meta>
            <Link href='https://github.com/JoshJAL/admin-dashboard'>
              https://github.com/JoshJAL/admin-dashboard <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Browsers</Meta>
            <span>Edge/Firefox/Google Chrome/Safari</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript, HTML, CSS</span>
          </ListItem>
        </List>

        <WorkImage src='/images/adminDashboard/desktop-light.jpg' alt='Admin Dashboard desktop light mode' />
        <WorkImage src='/images/adminDashboard/desktop-dark.jpg' alt='Admin Dashboard desktop dark mode' />
        <WorkImage src='/images/adminDashboard/tablet-light.jpg' alt='Admin Dashboard tablet light mode' />
        <WorkImage src='/images/adminDashboard/tablet-dark.jpg' alt='Admin Dashboard tablet dark mode' />
        <WorkImage src='/images/adminDashboard/phone-1-light.jpg' alt='Admin Dashboard first mobile image light mode' />
        <WorkImage src='/images/adminDashboard/phone-1-dark.jpg' alt='Admin Dashboard first mobile image dark mode' />
        <WorkImage
          src='/images/adminDashboard/phone-2-light.jpg'
          alt='Admin Dashboard second mobile image light mode'
        />
        <WorkImage src='/images/adminDashboard/phone-2-dark.jpg' alt='Admin Dashboard second mobile image dark mode' />
        <WorkImage src='/images/adminDashboard/phone-3-light.jpg' alt='Admin Dashboard third mobile image light mode' />
        <WorkImage src='/images/adminDashboard/phone-3-dark.jpg' alt='Admin Dashboard third mobile image dark mode' />
        <WorkImage
          src='/images/adminDashboard/phone-sidebar-light.jpg'
          alt='Admin Dashboard mobile sidebar image light mode'
        />
        <WorkImage
          src='/images/adminDashboard/phone-sidebar-dark.jpg'
          alt='Admin Dashboard mobile sidebar image dark mode'
        />
      </Container>
    </Layout>
  );
};

export default Work;
