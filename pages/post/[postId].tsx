import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import Link from 'next/link'
// import Router, { useRouter } from 'next/router'
// import { useState, useEffect } from 'react'
import { MainLayout } from '../../components/MainLayout'
import { MyPost } from '../../types/types'

type PostPageProps = {
  post: MyPost
}

const Post: NextPage<PostPageProps> = ({ post }) => {
  // const router = useRouter()

  return (
    <MainLayout>
      <h1>
        <b>Post about:</b> {post.title}
      </h1>
      <br />
      <div>
        <b>Post description:</b> {post.descr}
      </div>
      <hr />
      <br />
      <Link href={`/posts`}>
        <a>Back to all posts</a>
      </Link>

      <style jsx>{`
        a {
          color: darkblue;
          text-decoration: underline;
        }
      `}</style>
    </MainLayout>
  )
}

export default Post

interface PostNextPageContext extends GetServerSidePropsContext {
  query: {
    postId: string
  }
}

// эта функция более современная, чем getInitialProps,
// позволяет более детально работать с back-end запросами,
// Главное отличие: данная функция вызывается исключительно на сервере
export const getServerSideProps: GetServerSideProps = async (
  ctx: PostNextPageContext,
) => {
  const postId = ctx.query.postId
  const response = await fetch(`${process.env.API_URL}/posts/${postId}`)
  const post: MyPost = await response.json()

  return {
    props: {
      post,
    },
  }
}

// getStaticProps и getStaticPaths - это уже про
// статическую генерацию сайтов (SSG):

// export const getStaticPaths = async () => {
//   return {
//     paths: [
//       // какие посты рендерить на сервере сразу (через ssr):
//       { params: { postId: '1' } },
//       { params: { postId: '2' } },
//       { params: { postId: '3' } },
//     ],
//     // рендерить ли последующие посты, но уже через csr, а не через ssr
//     // (true - да, false - нет (если false, то будет выводить страницу 404))
//     // Нюанс: если указано true, и поста нет в ssr,
//     // то при прямом переходе по ссылке на этот пост выдаст ошибку,
//     // на него можно переходить только со страницы родителя - posts в данном случае
//     fallback: false,
//   }
// }

// export const getStaticProps = async (ctx) => {
//   const postId = ctx.params.postId
//   const response = await fetch(`${process.env.API_URL}/posts/${postId}`)
//   const post = await response.json()

//   return {
//     props: {
//       post,
//     },
//   }
// }
