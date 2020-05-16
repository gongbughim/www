import React, { useEffect } from "react"

interface PropTypes {
  prefix?: string
  notebook: string
}

export default (props: PropTypes) => {
  const prefix = props.prefix || "nb"

  useEffect(() => {
    const script = document.createElement("script")
    script.setAttribute("type", "module")
    script.textContent = `
      import {
        Runtime, Inspector, Library
      } from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js"
      import notebook from "https://api.observablehq.com/${props.notebook}.js?v=3"
      const test = document.querySelector("main :first-child")
      if (test === null) new Error("main element not found")

      const stdlib = new Library()
      const library = Object.assign({}, stdlib, { width })

      function width() {
        return stdlib.Generators.observe(notify => {
          let width = notify(test.clientWidth)

          function resized() {
            const width1 = test.clientWidth
            if (width1 !== width) notify((width = width1))
          }

          window.addEventListener("resize", resized)
          return () => window.removeEventListener("resize", resized)
        })
      }

      const runtime = new Runtime(library)
      runtime.module(notebook, name => {
        name = (name || '').replace(/ /g, '-')
        const element = document.querySelector(".${prefix}-" + name)
        return new Inspector(element || document.createElement('div'))
      })
    `
    document.body.appendChild(script)
  })

  return <></>
}
