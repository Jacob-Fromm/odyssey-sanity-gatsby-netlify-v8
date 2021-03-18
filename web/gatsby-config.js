// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')
const token = process.env.SANITY_READ_TOKEN

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        projectId: 'tnd2c0o9',
        dataset: 'production',
        overlayDrafts: true,
        watchMode: true,
        token: 'skCpnXZUax9LyYZob4EaM7MeJp7d2dXzvx9WTCo92DUyBgjHnWqyoDWDbsnUd7Y7P935wQv7c35p7dqkMwxieBMMzSbvhpg2mbrF7THWYZ4wwAE45GC6A5p2kg7dClAAfwMiSJLu6225ynG82eKHuANdozTd5MpoxiDUfL68W4r0yjICSuQm',
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.MY_SANITY_TOKEN,
        // watchMode: !isProd,
        // overlayDrafts: !isProd && token
      }
    },
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {
        // basePath defaults to `/`
        basePath: `/sideproject`,
      }
    }
  ]
}
