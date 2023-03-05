import { Link, PageProps } from "gatsby";
import * as React from "react"
import ArticlePreview from "./components/articleLink";

import './bloglist.css';

// remove any
interface BlogProps {
  data: any,
  max?: number
}

const createArticleLinkListElement = (frontmatter: any) => {
  const {title, slug, date} = frontmatter;
  const linkDestination = "/blog" + slug;
  return (
    <li key={slug}>
      <Link to={linkDestination}> {date} &mdash; <span>{title}</span> </Link>
    </li>
  )
}


const BlogPostList = ({ data, max }: BlogProps) => {
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
      //years[year] = [<ArticlePreview frontmatter={post.frontmatter} />];
    }
    else {
      years[year].push(createArticleLinkListElement(post.frontmatter));
      //years[year].push(<ArticlePreview frontmatter={post.frontmatter} />);
    }
  })

  // creates a separate section for each year 
  for (const [key, value] of Object.entries(years)) {
    articleList.push(
      <div key={key}>
        <h1>{key}</h1>
        <ul>
          {value.reverse()} 
        </ul>
      </div>
    )
  }

  return (
    <div id="main-bloglist">
      {articleList.reverse()}
    </div>
  )
}

export default BlogPostList;
