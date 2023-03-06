import { graphql, Link, useStaticQuery } from 'gatsby';
import * as React from 'react';
// import ArticlePreview from "./components/articleLink";

import './bloglist.css';

type BlogProps = {
  max?: number
};

const createArticleLinkListElement = (
  title: string,
  slug: string,
  date: string,
) => {
  const linkDestination = `/blog${slug}`;
  return (
    <li key={slug}>
      <Link to={linkDestination}>
        {' '}
        {date} &mdash;
        <span>{title}</span>{' '}
      </Link>
    </li>
  );
};

function BlogList({ max }: BlogProps) {
  const data = useStaticQuery<Queries.Query>(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            slug
            date
          }
        }
      }
    }
  `);
  const { allMarkdownRemark } = data;
  const { nodes } = allMarkdownRemark;

  const articleList: JSX.Element[] = [];

  if (max) {
    const amount = max > nodes.length ? nodes.length : max;
    for (let i = 0; i < amount; i++) {
      const { title, slug, date } = nodes[i].frontmatter!;
      articleList.push(createArticleLinkListElement(title!, slug!, date!));
    }
    return (
      <div>
        <ul>{articleList.reverse()}</ul>
      </div>
    );
  }

  // no max == full blog page
  const years: { [key: string]: JSX.Element[] } = {};

  // generates the dictionary of blog posts keyed under a year
  nodes.forEach((post: any) => {
    const { title, slug, date } = post.frontmatter!;
    const year = date.split(' ')[0];

    if (!years.hasOwnProperty(year)) {
      years[year] = [createArticleLinkListElement(title!, slug!, date!)];
    } else {
      years[year].push(createArticleLinkListElement(title!, slug!, date!));
    }
  });

  // creates a separate section for each year
  for (const [key, value] of Object.entries(years)) {
    articleList.push(
      <div key={key}>
        <h1>{key}</h1>
        <ul>{value.reverse()}</ul>
      </div>,
    );
  }

  return <div id="main-bloglist">{articleList.reverse()}</div>;
}

export default BlogList;
