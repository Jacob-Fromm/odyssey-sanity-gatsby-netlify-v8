import React from "react"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Podcast from "../../../components/Podcast/Podcast"

const Cara = () => (
  <Layout>
    <Parallax pages={5}>
      {/* <ParallaxLayer offset={1} speed={1}  />
      <ParallaxLayer offset={2} speed={1}  />

      <ParallaxLayer offset={0} speed={0} factor={3} /> */}

      <ParallaxLayer offset={0} factor={1}speed={-0.3} >
        <Hero />
      </ParallaxLayer>

      <ParallaxLayer offset={1} factor={0.5} >
       
      </ParallaxLayer>

      <ParallaxLayer offset={2} factor={1} speed={0.5} >
        < Podcast />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.2}>
        <Contact />
      </ParallaxLayer>
      {/* <Projects /> */}
    </Parallax>
  </Layout>
)

export default Cara
