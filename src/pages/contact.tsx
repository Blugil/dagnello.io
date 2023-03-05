import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/layout"
import '../components/layout/layout.css'
import ContactForm from "../components/contact/contact"

const Contact = () => {
  return (
    <main>
      <Layout component={<ContactForm />} />
    </main>
  )
}

export default Contact;

export const Head: HeadFC = () => <title>Contact</title>
