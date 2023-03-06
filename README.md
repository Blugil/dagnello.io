# Personal Portfolio Website and Blog

This is my personal website that I made to have a place to write down my thoughts and opinions as well as showcase my work.
It has brief description of me on the home page, a list of all my blog posts, an html version of my resume, and a way to contact me.

## Technology

I utilized Gatsby and TypeScript for this website. I wanted the type safety of TypeScript (along with the practice) while also
having an easy to use framework for static site generation and blog post hosting with markdown.

## Thoughts

TypeScript ensures that I know what I'm getting when I access data and what I need to put in when I give data which is a feature I _enjoy_ about other languages.
I'm a very big fan of type safety, but it's clear to me that with so many different possibilities that it's almost impossible to maintain complete type safety.
However, avoiding the `any` keyword as much as possible has forced me to be much more specific with what I'm putting in as function parameters.

For example, I had a function signature look like this:

```js
function something(myObj: any) {
    const ({title, date, slug}) = myObj;
    // logic
}
```

This satisfied my inexperienced brain as I had extrapolated that method from the example I saw, but I quickly realized this is exactly what TypeScript tries to avoid.
Because the `object` parameter comes from a GraphQL query, I didn't know exactly what type the object would be or exactly what parameters it would have (at least with my current skill set).
This lead me to adjusting how I was writing my functions (and components) by taking only the necessary data which resulted in this change:

```js
function something(title: string, date: string, slug: string) {
  // logic
}
```

Doing it like this creates more easily readable, easy to understand, and&mdash;more importantly&mdash; easy for me to read 6 months from now when I do my annual refactor of my website...

## Conclusion

Switching from my previous website which used a script to generate JSX files that I then had to fill in manually with elements was incredibly cumbersome and while a fun novelty at first,
quickly became another barrier between my idea for a post and actually getting it on the internet. Gatsby is great and easy to work with and has an incredibly rich and easy to use plugin environment
which let me spend more of my time thinking about structure than thinking about process. And I think this was a good first step into me using TypeScript with React. This website will continue
to be improved and I hope it can serve as a great public entrypoint into me thoughts, opinions, projects, and anything else I can imagine.
