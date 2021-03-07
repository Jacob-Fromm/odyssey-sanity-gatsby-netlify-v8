import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <h1>PAGE NOT FOUND</h1>
    <p>This page does not exist. For your own safety, please return from whence you came.</p>
  </Layout>
)

export default NotFoundPage
