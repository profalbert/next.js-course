import { NextPage, NextPageContext } from 'next'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { MainLayout } from '../components/MainLayout'
import { MyPost } from '../types/types'

type PostsPageProps = {
  posts: Array<MyPost>
}

const Posts: NextPage<PostsPageProps> = ({ posts: serverPosts }) => {
  const [posts, setPosts] = useState(serverPosts)

  useEffect(() => {
    const load = async () => {
      const response = await fetch(`${process.env.API_URL}/posts`)
      const json = await response.json()
      setPosts(json)
    }
    if (!serverPosts) {
      load()
    }
  }, [])

  if (!posts) {
    return (
      <MainLayout>
        <h2>Loading ...</h2>
      </MainLayout>
    )
  }

  return (
    <MainLayout title={'Posts Page'}>
      <h1>Posts Page</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <hr />
            <div>
              <b>Post number:</b> {post.id}
            </div>
            <br />
            <div>
              <b>Post title:</b>{' '}
              <Link href={`/post/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </div>
            <br />
            <div>
              <b>Post description:</b> {post.descr}
            </div>
            <hr />
            <br />
            <br />
          </li>
        ))}
      </ul>

      <style jsx>{`
        a {
          color: darkblue;
          text-decoration: underline;
        }
      `}</style>
    </MainLayout>
  )
}

export default Posts

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  // делаем это для прелоадера на странице
  // он будет работать только при переходе из приложения,
  // при начальной загрузке страницы getInitialProps будет
  // работать только на сервере, а значит прелоадер не будет работать
  if (!req) {
    return {
      posts: null,
    }
  }

  // на сервере не работает обычный fetch, нужно использовать
  // isomorphic-fetch, но в данном случае он уже установлен в самом next.js
  const response = await fetch(`${process.env.API_URL}/posts`)
  const posts: Array<MyPost> = await response.json()

  return {
    posts,
  }
}
