import { Link } from "gatsby";
import * as React from "react"

const BlogPostList: React.FC<any> = ({ data, max }) => {
  const { allMarkdownRemark } = data 
  const nodes = allMarkdownRemark.nodes;
  
  let articleList: any[] = [];

  if (max) {
    const amount = max > nodes.length ? nodes.length : max;
    for (let i = 0; i < amount; i++) {
      const {title, slug, date} = nodes[i].frontmatter;
      const linkDestination = "/blog" + slug;
      articleList.push(
        <li key={title}>
          <Link to={linkDestination}> {date} &mdash; <span>{title}</span> </Link>
        </li>
      )
    }
  }

  else {
    nodes.forEach((post: any) => {
      const {title, slug, date} = post.frontmatter;
      const linkDestination = "/blog" + slug;
      articleList.push(
        <li key={title}>
          <Link to={linkDestination}> {date} &mdash; <span>{title}</span> </Link>
        </li>
      )
    })
  }

  return (
    <div>
      <ul>
        {articleList}
      </ul>
    </div>
  )
}

export default BlogPostList;
