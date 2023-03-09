import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Dominick Agnello`,
    author: '@Blugil',
    description:
      'A personal website to showcase my articles and projects along with a way to contact me',
    keywords:
      'blugil, dominick agnello, programming, Linux, Rust, TypeScript, blog, growth',
    siteUrl: `https://dagnello.io`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-mdx',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/posts/',
      },
      __key: 'pages',
    },
  ],
}

export default config
