export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5deb5bc637731534f9e946f7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zizuuy77',
                  apiId: 'e69f67be-b201-4bd8-892c-830e6c7ff734'
                },
                {
                  buildHookId: '5deb5bc7354ee5e7083c64a0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-e23rp4xb',
                  apiId: '17f6b49a-1166-4b64-b203-c882929c18f7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ulampinoy/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-e23rp4xb.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
