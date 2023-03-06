import * as React from 'react';
import type { HeadFC } from 'gatsby';
import Layout from '../layout';
import '../layout/layout.css';
import Home from '../components/home/home';

function IndexPage() {
  return (
    <main>
      <Layout component={<Home />} />
    </main>
  );
}

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
