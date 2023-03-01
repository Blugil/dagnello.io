import * as React from "react"
import { Link } from 'gatsby'
import './articles.css'

const BlogPostLayout: React.FC<any> = ({
  data,
}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="layout">
      <div className="article-container">
      <div className="entry">

        <div className="back-button">
          <div className="link">
            <Link to="/blog"> All Articles</Link>
          </div>
          <div className="line" />
        </div>

        <div className="article-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="small">
          <small>by <Link to="/"> Dominick Agnello </Link>| {frontmatter.date}</small>
        </div>

        </div>
      </div>

    </div>
  )
}

export default BlogPostLayout;

