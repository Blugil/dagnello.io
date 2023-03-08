import * as React from 'react';
import Layout from '../layout';
import '../layout/layout.css';
import ResumeBuild from '../components/resume/resume';
import { SEO } from '../components/seo';

function Resume() {
  return (
    <main>
      <Layout component={<ResumeBuild />} />
    </main>
  );
}

export default Resume;

export const Head = () => {
  <SEO title="Resume | dagnello" />
}
