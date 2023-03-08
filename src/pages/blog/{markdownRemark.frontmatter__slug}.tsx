import * as React from 'react';
import { graphql, HeadProps, PageProps } from 'gatsby';
import BlogPostLayout from '../../layout/article';
import { SEO } from '../../components/seo';

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
        title
        date
        slug
      }
    }
  }
`;

export default BlogPostTemplate;

export const Head = (props: HeadProps<Queries.Query>) => {
  return(
    <SEO title={props.data.markdownRemark?.frontmatter?.title} />
  )
}
