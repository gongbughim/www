import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: 페이지가 없습니다" />
    <h1>페이지가 없습니다</h1>
    <p>
      <Link to="/">홈으로 가기</Link>
    </p>
  </Layout>
)

export default NotFoundPage
