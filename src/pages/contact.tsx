import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import '../components/layout/layout.css'

const Contact: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout />
    </main>
  )
}

export default Contact;

export const Head: HeadFC = () => <title>Contact</title>
