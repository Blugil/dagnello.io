import * as React from "react"
import { Link } from 'gatsby'
import './articles.css'

const BlogPostLayout = ({ frontmatter, html }: BlogPostTemplateType) => {
  
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
        <div className="spacer" />
      </div>
    </div>
  )
}

export default BlogPostLayout;

