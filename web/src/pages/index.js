import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import Container from '../components/container'
import { StaticImage } from "gatsby-plugin-image"
import GraphQLErrorList from '../components/graphql-error-list'
import ArticlePreviewGrid from '../components/Article/article-preview-grid'
import Articles from './articles'
import SEO from '../components/seo'
// import Layout from '../containers/layout'
import Podcast from '../components/Podcast/Podcast'
import Layout from '../gatsby-theme-cara/src/components/layout'
import Contact from '../components/contact'
import About from '../../node_modules/@lekoarts/gatsby-theme-cara/src/components/about'
import Hero from '../gatsby-theme-cara/src/components/hero'

import Footer from '../gatsby-theme-cara/src/components/footer'
// import splashImage from '../images/DAVID_SPLASH_PAGE_2.jpg'
const imageSrc = require('../images/DAVID_SPLASH_PAGE_2.jpg')


export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      subtitle
      description
      keywords
    }
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

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  
  const site = (data || {}).site
  const projectNodes = (data || {}).projects
  // const articleNodes = (data || {}).articles
  
    ? mapEdgesToNodes(data.projects)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }
  console.log("props sent to APG from index.js", data.articles.edges)
  return (
    <div >

      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Layout >
          <Hero />
          <ArticlePreviewGrid
          title='Latest Articles'
          articles={data.articles.edges}
          browseMoreHref='/archive/'

          />
          < Podcast />
          <Contact />
          <Footer />
     </Layout>
    </div>

    
  )
}

export default IndexPage
