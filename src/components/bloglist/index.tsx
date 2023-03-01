import { Link } from "gatsby";
import * as React from "react"


const generateDatedList = () => {
  return(
    <div>
      <h1>date</h1>
      <ul>
        something
      </ul>
    </div>
  )
}


const createArticleLinkListElement = (frontmatter: any) => {
  const {title, slug, date} = frontmatter;
  const linkDestination = "/blog" + slug;

  let year = date.split(' ')[0];
  console.log(year);
  return (
    <li key={title}>
      <Link to={linkDestination}> {date} &mdash; <span>{title}</span> </Link>
    </li>
  )
}


const BlogPostList: React.FC<any> = ({ data, max }) => {
  const { allMarkdownRemark } = data 
  const nodes = allMarkdownRemark.nodes;
  
  let articleList: any[] = [];

  if (max) {
    const amount = max > nodes.length ? nodes.length : max;
    for (let i = 0; i < amount; i++) {
      articleList.push(createArticleLinkListElement(nodes[i].frontmatter))
    }
  }

  else {
    nodes.forEach((post: any) => {
      articleList.push(createArticleLinkListElement(post.frontmatter))
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
