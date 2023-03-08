import * as React from 'react';
import BlogList from '../components/bloglist/bloglist';
import { SEO } from '../components/seo';
import Layout from '../layout';

function BlogPage() {
  return (
    <main>
      <Layout component={<BlogList />} />
    </main>
  );
}

export default BlogPage;

export const Head = () => {
  <SEO title="Blog | dagnello" />
}
