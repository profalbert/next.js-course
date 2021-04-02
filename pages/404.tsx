import s from '../styles/page404.module.scss'
import Link from 'next/link'
import { MainLayout } from '../components/MainLayout'
import { NextPage } from 'next'

const Page404: NextPage = () => {
  return (
    <MainLayout>
      <h1 className={s.error}>Error: 404</h1>
      <p>
        Please{' '}
        <Link href={'/'}>
          <a className={s.goBackLink}>go back</a>
        </Link>{' '}
        to home page
      </p>
    </MainLayout>
  )
}

export default Page404
