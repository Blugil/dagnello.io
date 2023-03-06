import * as React from "react"
import BlogList from '../components/bloglist/bloglist'
import Layout from "../components/layout"


const BlogPage = () => {
  return (
    <main>
      <Layout component={<BlogList />} />
    </main>
  )
}

export default BlogPage;

