import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import BlogPostLayout from '../../layout/article';

// replace any
function BlogPostTemplate({ data }: PageProps<Queries.Query>) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark!;

  return (
    <div>
      <div>
        <BlogPostLayout frontmatter={frontmatter} html={html} />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date
        slug
      }
    }
  }
`;

export default BlogPostTemplate;
