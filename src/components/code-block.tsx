import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"

// https://github.com/FormidableLabs/prism-react-renderer#faq
import Prism from "prism-react-renderer/prism"
const _global = global || window
_global["Prism"] = Prism
require("prismjs/components/prism-haskell")

export default ({ children, className }) => {
  const language = className.replace(/language-/, "")

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line: any, i: any) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token: any, key: any) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
