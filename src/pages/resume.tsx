import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import '../components/layout/layout.css'

const Resume: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout />
    </main>
  )
}

export default Resume;

export const Head: HeadFC = () => <title>Resume</title>
