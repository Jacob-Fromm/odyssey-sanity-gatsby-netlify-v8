import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout' 
import Container from '../components/container'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

//imported from project-preview.js
import { cn, buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from '../components/block-text'

import styles from '../components/project-preview.module.css'
import { responsiveTitle3 } from '../components/typography.module.css'

export const query = graphql`
query MyQuery {
  articles: allSanityArticle {
    edges {
      node {
        headline
        slug {
          current
        }
        url
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
           }
          }
        }
        publication
      }
    }
  }
}
`
const Articles = ({ data }) => {
  console.log("articles data", data)
    return(
        <Layout>
            <Container>
                {/* <ul style={{
                    listStyle: 'none', 
                    display: 'flex', 
                    alignItems: 'space-betweetn', 
                    padding: 0}}>
                    {data.allSanityArticle.edges.map(({ node: article }) => (
                      <li key={article.slug.current} style={{
                          flex: '1 45%', 
                          maxWidth: '45%',
                          margin: '1rem',
                          flexWrap: 'wrap'}}>
                        <h2 style={{ fontSize: '24px'}}>{article.headline}</h2>
                        <Image fluid={article.image.asset.fluid} alt={article.headline} />
                        <a href={article.url}  style={{
                          display: 'block',
                          marginTop: '1rem'
                        }}>for {article.publication}</a>
                      </li>  
                    ))}
                </ul> */}
            </Container>
        </Layout>
    )
}

export default Articles