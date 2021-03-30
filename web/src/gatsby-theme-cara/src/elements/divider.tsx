/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

type DividerProps = {
  speed: number
  offset: number
  children?: React.ReactNode
  bg?: string
  fill?: string
  clipPath?: string
  className?: string
  factor?: number
}

const Divider = ({
  speed,
  offset,
  factor = 1,
  bg = ``,
  fill = ``,
  clipPath = ``,
  children = null,
  className = ``,
}: DividerProps) => (
  <div>
    {children}
  </div>
)

export default Divider
