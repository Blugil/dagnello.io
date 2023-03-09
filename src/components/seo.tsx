import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

export const SEO = ({ title, description, children }: any) => {
  const { title: defaultTitle, description: defaultDescription } =
    useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {children}
    </>
  );
};
