import * as React from "react"
import { graphql, PageProps } from "gatsby"
import BlogPostList from '../components/bloglist/bloglist'
import Layout from "../components/layout"


const BlogPage: React.FC<PageProps> = ({ data }) => {
  return (
    <main>
      <Layout component={<BlogPostList data={data}/>} />
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

export default BlogPage;

