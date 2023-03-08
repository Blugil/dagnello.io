import * as React from 'react';
import Layout from '../layout';
import '../layout/layout.css';
import ContactForm from '../components/contact/contact';
import { SEO } from '../components/seo';
import { HeadFC } from 'gatsby';

function Contact() {
  return (
    <main>
      <Layout component={<ContactForm />} />
    </main>
  );
}

export default Contact;

export const Head: HeadFC = () => {
  return(
    <SEO title="Contact | dagnello" />
  )
}
