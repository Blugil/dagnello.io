declare module '*.png'
declare module '*.pdf'

declare type PostMetadata = {
  title: string
  slug: string
  date: string
}

declare type BlogPostTemplateType = {
  frontmatter: any
  html: any
}
