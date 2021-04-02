import { NextPage } from 'next'
import Router from 'next/router'
import { MainLayout } from '../../components/MainLayout'

type AboutPageProps = {
  title: string
}

const About: NextPage<AboutPageProps> = ({ title }) => {
  const linkClickHandler = () => {
    Router.push('/')
  }

  return (
    <MainLayout title={'About Page'}>
      <h1>{title}</h1>
      <button onClick={linkClickHandler}>Go back to home</button>
      <br />
      <br />
      <button onClick={() => Router.push('/posts')}>Go to Posts</button>
    </MainLayout>
  )
}

export default About

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_URL}/about`)
  const data = await response.json()

  return {
    props: {
      title: data.title,
    },
  }
}
