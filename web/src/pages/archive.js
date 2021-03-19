import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'

import {responsiveTitle1} from '../components/typography.module.css'
import ArticlePreviewGrid from '../components/Article/article-preview-grid'

export const query = graphql`
  query ArchivePageQuery {
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

const ArchivePage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  console.log(data)
  // const articleNodes =
  //   data && data.articles && mapEdgesToNodes(data.articles).filter(filterOutDocsWithoutSlugs)
  // console.log("archive data", articleNodes)
  return (
    <Layout>
      <SEO title='Archive' />
      <Container>
        <h1 className={responsiveTitle1}>Articles</h1>
        {/* {articleNodes && articleNodes.length > 0 && <ArticlePreviewGrid nodes={data} />} */}
        <ArticlePreviewGrid nodes={data.articles.edges} />
      </Container>
    </Layout>
  )
}

export default ArchivePage
