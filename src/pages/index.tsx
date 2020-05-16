import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const posts = data.allMdx.edges

  return (
    <Layout>
      <SEO title="Home" />
      <h1>포스트</h1>첫 화면은 아직 작업 중...
      <ol>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
            <div className="date">{post.frontmatter.date}</div>
            <div className="excerpt">{post.excerpt}</div>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query blogIndex {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "Y-MM-DD")
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`
