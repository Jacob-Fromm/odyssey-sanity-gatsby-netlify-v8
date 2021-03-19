import React from 'react'
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons.cjs"
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ArticlePreviewGrid from '../components/Article/article-preview-grid'
import Articles from './articles'
import SEO from '../components/seo'
// import Layout from '../containers/layout'
import Podcast from '../components/Podcast/Podcast'
import Layout from '../../node_modules/@lekoarts/gatsby-theme-cara/src/components/layout'
// import Hero from '@lekoarts/gatsby-theme-cara/src/components/hero'
// import StructureMenuWidget from '../../../studio/plugins/dashboard-widget-structure-menu/src/components/StructureMenuWidget'
import Contact from '../../node_modules/@lekoarts/gatsby-theme-cara/src/components/contact'
import About from '../../node_modules/@lekoarts/gatsby-theme-cara/src/components/about'
import Hero from '../gatsby-theme-cara/src/components/hero'
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
  console.log("articles", data.articles)
  return (
    <Layout>
      {/* <Container> */}
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Parallax pages={5}>
        <Hero offset={0} factor={1}/>
        {/* <h1>Welcome to {site.title}</h1>
        <h2>{site.subtitle}</h2> */}
        <ArticlePreviewGrid
          title='Latest Articles'
          articles={data.articles.edges}
          browseMoreHref='/archive/'
          offset={1} factor={2}
          />
          {/* <StructureMenuWidget /> */}
          <Podcast offset={3} factor={1}/>
          <Contact offset={4} factor={1} />
        <About offset={5} factor={1} />
      </Parallax>
      {/* </Container> */}
    </Layout>
    
  )
}

export default IndexPage
