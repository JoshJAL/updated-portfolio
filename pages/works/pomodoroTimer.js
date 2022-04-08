import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Pomodoro Timer">
      <Container marginTop={4}>
        <Title>
          Pomodoro Timer <Badge>2022</Badge>
        </Title>
        <P>
          A study timer built around the Pomodoro Technique with a "Focus" timer
          and a "Break" timer. After the time has elapsed for either the "Focus"
          or "Break" phase an alarm will play informing the user that it is time
          to either take a break or get back to work. I use this personally and
          find that it greatly aids in countering burnout when working on large
          projects.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub Repository</Meta>
            <Link href="https://github.com/JoshJAL/Pomodoro-Timer-Project">
              https://github.com/JoshJAL/Pomodoro-Timer-Project{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Browsers</Meta>
            <span>Google Chrome/Safari/Edge</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS and React</span>
          </ListItem>
        </List>

        <WorkImage
          src="/images/pomodoroTimer/pomodoroTimerHomePage.jpg"
          alt="Pomodoro Timer home page"
        />
        <WorkImage
          src="/images/pomodoroTimer/timerRunning.jpg"
          alt="Pomodoro Timer focus timer running"
        />
        <WorkImage
          src="/images/pomodoroTimer/timerPaused.jpg"
          alt="Pomodoro Timer focus timer paused"
        />
        <WorkImage
          src="/images/pomodoroTimer/breakTimerRunning.jpg"
          alt="Pomodoro Timer break timer running"
        />
      </Container>
    </Layout>
  )
}

export default Work
