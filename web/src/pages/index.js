import React from 'react'
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
import Layout from '../containers/layout'

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
  const articleNodes = (data || {}).allSanityArticle
  
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
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <h1>Welcome to {site.title}</h1>
        <h2>{site.subtitle}</h2>
        <h3>Articles</h3>
        {articleNodes && (
          <ArticlePreviewGrid
            title='Latest Articles'
            nodes={articleNodes}  
            browseMoreHref='/archive/'
          />
        )}
      </Container>
    </Layout>
  )
}

export default IndexPage
