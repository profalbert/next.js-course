import { NextPage } from 'next'
import { MainLayout } from '../components/MainLayout'

const Index: NextPage = () => {
  return (
    <MainLayout title={'Home Page'}>
      <h1>Hello Next.js</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </MainLayout>
  )
}

export default Index
