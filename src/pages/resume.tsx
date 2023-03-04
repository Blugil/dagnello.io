import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/layout"
import '../components/layout/layout.css'
import ResumeBuild from "../components/resume/resume"

const Resume: React.FC<void> = () => {
  return (
    <main>
      <Layout component={<ResumeBuild />} />
    </main>
  )
}

export default Resume;

export const Head: HeadFC = () => <title>Resume</title>
