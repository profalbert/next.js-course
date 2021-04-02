import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ReactNode } from 'react'

type MainLayoutProps = {
  children: ReactNode
  title?: string
}

export const MainLayout: NextPage<MainLayoutProps> = ({
  children,
  title = 'Next App',
}) => {
  return (
    <>
      <Head>
        <title>{title} | Next Course</title>
        <meta
          name='keywords'
          content='next, js, react, javascript, ts, typescript'
        />
        <meta name='description' content='This Next.js-Course from internet' />
        <meta charSet='utf-8' />
      </Head>

      <nav>
        <Link href={'/'}>
          <a>Home Page</a>
        </Link>
        <Link href={'/about'}>
          <a>About Page</a>
        </Link>
        <Link href={'/posts'}>
          <a>Posts Page</a>
        </Link>
        <Link href={'/about/author'}>
          <a>Author Page</a>
        </Link>
        <Link href={'/api/echo'}>
          <a>API</a>
        </Link>
      </nav>

      <main>{children}</main>

      {/* атрибут global теге в style задаст стили глобально, 
      а не с уникальным префиксом для конкретного элемента */}
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          top: 0;
          left: 0;
          right: 0px;
          background: darkblue;
          display: grid;
          grid-auto-flow: column;
          justify-content: space-around;
          align-items: center;
        }

        nav a {
          color: #fff;
          text-decoration: none;
        }

        main {
          margin-top: 60px;
          padding: 2rem;
        }
      `}</style>
    </>
  )
}
