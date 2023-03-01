import * as React from "react"
import { graphql } from "gatsby"
import BlogPostList from '../components/bloglist'
import Layout from "../components/layout"


const BlogPage: React.FC<any> = ({
  data,
}) => {
  return (
    <div>
      <Layout component={<BlogPostList data={data}/>} />
    </div>
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

