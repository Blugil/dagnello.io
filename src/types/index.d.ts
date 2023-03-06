declare module '*.png';
declare module '*.pdf';

declare interface PostMetadata {
  title: string,
  slug: string,
  date: string
}

declare interface BlogPostTemplateType {
  frontmatter: MarkdownRemarkFontmater,
  html: any
}
