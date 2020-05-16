import React from "react"
import css from "./footer.module.css"

export default () => {
  return <footer className={css.root}>Built at {new Date().toISOString()}</footer>
}
