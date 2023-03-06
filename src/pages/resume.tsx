import * as React from 'react';
import type { HeadFC } from 'gatsby';
import Layout from '../layout';
import '../layout/layout.css';
import ResumeBuild from '../components/resume/resume';

function Resume() {
  return (
    <main>
      <Layout component={<ResumeBuild />} />
    </main>
  );
}

export default Resume;

export const Head: HeadFC = () => <title>Resume</title>;
