import * as React from "react"
import { graphql, PageProps } from "gatsby"
import type { HeadFC } from "gatsby"
import Layout from "../components/layout"
import '../components/layout/layout.css'
import Home from "../components/home/home"

const IndexPage = ({ data }: PageProps) => {
  return (
    <main>
      <Layout component={ <Home data={data} /> } />
    </main>
  )
}

export const postQuery = graphql`
  query {
    allMarkdownRemark {
       nodes{
        frontmatter {
          title
          slug
          date
        }
      }
    }
  }
`

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
