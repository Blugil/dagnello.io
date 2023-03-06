import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/layout"
import '../components/layout/layout.css'
import Home from "../components/home/home"

const IndexPage = () => {
  return (
    <main>
      <Layout component={ <Home /> } />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
