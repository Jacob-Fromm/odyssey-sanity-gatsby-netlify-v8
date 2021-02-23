export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603583f6f656350f16e4356f',
                  title: 'Sanity Studio',
                  name: 'odyssey-sanity-gatsby-netlify-v-8-studio',
                  apiId: '18646566-7b97-4c7c-9b36-3b1e2ebb0e3a'
                },
                {
                  buildHookId: '603583f6ba11910b166bd13e',
                  title: 'Portfolio Website',
                  name: 'odyssey-sanity-gatsby-netlify-v-8',
                  apiId: 'dc1e2323-005b-4e00-858a-40df9a34951e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jacob-Fromm/odyssey-sanity-gatsby-netlify-v8',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://odyssey-sanity-gatsby-netlify-v-8.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
