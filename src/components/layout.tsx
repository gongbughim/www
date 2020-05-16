import React from "react"
import Header from "./header"
import Footer from "./footer"
import css from "./layout.module.css"

interface PropTypes {
  children: React.ReactNode
}

export default (props: PropTypes) => {
  return (
    <div className={css.root}>
      <Header />
      <main className={css.main}>{props.children}</main>
      <Footer />
    </div>
  )
}
