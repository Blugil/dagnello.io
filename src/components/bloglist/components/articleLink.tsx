import { Link } from 'gatsby';
import * as React from 'react';

import './articleLink.css';

const ArticlePreview = (props: any) => {
  const {title, slug, date} = props.frontmatter;
  return(
    <li key={slug}>
      <Link to={'blog' + slug}>
        <small>{date} - Dominick Agnello</small>
        <h2>{title}</h2>
        <p>primer</p>
      </Link>
    </li>
  ) 
}

export default ArticlePreview;
