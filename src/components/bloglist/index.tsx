import { Link } from "gatsby";
import * as React from "react"

const createArticleLinkListElement = (frontmatter: any) => {
  const {title, slug, date} = frontmatter;
  const linkDestination = "/blog" + slug;
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
    return (
      <div>
        <ul>
          {articleList.reverse()}
        </ul>
      </div>
    )
  }

  // no max == full blog page
  let years: { [key: string] : any[]; } = {};

  // generates the dictionary of blog posts keyed under a year
  nodes.forEach((post: any) => {
    const {date} = post.frontmatter;
    const year = date.split(' ')[0];

    if (!years.hasOwnProperty(year)) {
      years[year] = [createArticleLinkListElement(post.frontmatter)];
    }
    else {
      years[year].push(createArticleLinkListElement(post.frontmatter));
    }
  })

  // creates a separate section for each year 
  for (const [key, value] of Object.entries(years)) {
    articleList.push(
      <div>
        <h1>{key}</h1>
        <ul>
          {value.reverse()} 
        </ul>
      </div>
    )
  }

  return (
    <div>
      {articleList.reverse()}
    </div>
  )
}

export default BlogPostList;
