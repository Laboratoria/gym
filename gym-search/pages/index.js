import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllExercises } from '../lib/api'
import Head from 'next/head'
import { useState } from 'react';

export default function Index({ allExercises }) {
  const [exercises, setExercises] = useState(allExercises);
  return (
    <>
      <Layout>
        <Head>
          <title>Ejercicios del gimnasio</title>
        </Head>
        <Container>
          <Intro setExercises={setExercises} />
          {!!exercises?.length && <MoreStories exercises={exercises} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allExercises = getAllExercises([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'difficulties',
    'projects',
    'OAs',
  ])  

  return {
    props: {
      allExercises,
    },
  }
}
