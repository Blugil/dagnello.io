import * as React from "react"
import { graphql } from "gatsby"
import BlogPostLayout from "../../components/layout/article"

const BlogPostTemplate: React.FC<any> = ({
  data,
}) => {
  return (
    <div>
      <div>
        <BlogPostLayout data={data} />   
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date
        slug
      }
    }
  }
`

export default BlogPostTemplate;
