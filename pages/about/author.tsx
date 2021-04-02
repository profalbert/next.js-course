import { NextPage } from 'next'
import Router from 'next/router'

const Author: NextPage = () => {
  return (
    <>
      <h1>Author Page</h1>
      <p>This component does not use a layout (MainLayout)!</p>
      <button onClick={() => Router.push('/')}>Go back to home</button>

      <style jsx>{`
        p {
          color: darkred;
        }
      `}</style>
    </>
  )
}

export default Author
