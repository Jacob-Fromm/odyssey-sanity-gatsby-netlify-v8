import React from 'react'
import SEO from '../components/seo'
import Layout from '../gatsby-theme-cara/src/components/layout'
import Container from '../components/container'
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import ArticlePreviewGrid from '../components/Article/article-preview-grid'
//imported from project-preview.js
import { cn, buildImageObj } from '../lib/helpers'
import { urlFor } from '../lib/image-url'
import BlockText from '../components/block-text'

import styles from '../components/project-preview.module.css'
import { responsiveTitle3 } from '../components/typography.module.css'

export const query = graphql`
query MyQuery {
  articles: allSanityArticle {
    edges {
      node {
        id
        headline
        slug {
          current
        }
        url
        publication
        publicationDate(formatString: "")
        author {
          name
        }
        image {
          _key
          _type
          alt
          caption
          crop {
            _key
            _type
            top
            bottom
            left
            right
          }
          hotspot {
            height
            width
            x
            y
          }
          asset {
            assetId
            fluid {
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              base64
              aspectRatio
            }
            id
            _id
          }
        }
      }
    }
  }
}
`
const Articles = ({ data }) => {
  console.log("articles data", data)
    return(
        <Layout>
          <ArticlePreviewGrid
            title='Latest Articles'
            articles={data.articles.edges}
            browseMoreHref='/archive/'
          />  
        </Layout>
    )
}

export default Articles