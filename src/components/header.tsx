import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import css from "./header.module.css"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const title = data.site.siteMetadata.title

  return (
    <header className={css.root}>
      <div>
        <Link to="/">{title}</Link>
      </div>
    </header>
  )
}
