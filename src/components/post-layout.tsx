import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import Observable from "../components/observable"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import css from "./layout.module.css"

export default function PageTemplate({ data: { mdx } }) {
  const shortcodes = { Link, Observable }

  return (
    <div className={css.root}>
      <SEO title={mdx.frontmatter.title} />
      <Header />
      <main className={css.main}>
        <h1>{mdx.frontmatter.title}</h1>
        <div className={css.date}>{mdx.frontmatter.date}</div>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </main>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "Y-MM-DD H:mm")
      }
    }
  }
`
