import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../layout"
import '../layout/layout.css'
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
