/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"
const imageSrc = require("../../../images/DAVID_SPLASH_PAGE_2.jpg")

const Hero = ({ offset, factor = 1 }) => (
  <div style={{
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${imageSrc})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }}>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}  >
      <Inner >
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero
