import * as React from 'react';
import Layout from '../layout';
import '../layout/layout.css';
import Home from '../components/home/home';
import { SEO } from '../components/seo';
import { HeadFC } from 'gatsby';

function IndexPage() {
  return (
    <main>
      <Layout component={<Home />} />
    </main>
  );
}

export default IndexPage;

export const Head: HeadFC = () => {
  return <SEO />;
};
