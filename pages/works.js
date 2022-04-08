import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/layouts/grid-item'
import thumbPeriodicTables from '../public/images/periodicTables/periodicHomePage.jpg'
import thumbFlashCard from '../public/images/Flashcard-O-Matic/flashcardOMaticHomePage.jpg'
import thumbPomodoroTimer from '../public/images/pomodoroTimer/pomodoroTimerHomePage.jpg'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" variant="section-title">
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="periodicTables"
              title="Periodic Tables"
              thumbnail={thumbPeriodicTables}
            >
              A restaurant reservation system for a fictional restaurant
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="flashcard"
              title="Flashcard"
              thumbnail={thumbFlashCard}
            >
              A flashcard making app for taking notes and studying any subject
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="pomodoroTimer"
              title="Pomodoro Timer"
              thumbnail={thumbPomodoroTimer}
            >
              A study timer built around the Pomodoro Technique with a "Focus"
              timer and a "Break" timer
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
