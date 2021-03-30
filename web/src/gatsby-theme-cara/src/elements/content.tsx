/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type ContentProps = {
  speed: number
  offset: number
  children: React.ReactNode
  className?: string
  factor?: number
}

const Content = ({ speed, offset, children, className = ``, factor = 1 }: ContentProps) => (
 <div>
    {children}
  </div>
)

export default Content
