export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '601919ce58c9398de43cd326',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jvaofpne',
                  apiId: 'aa204faa-f1b8-4720-a92c-1ac356608ee4'
                },
                {
                  buildHookId: '601919ce0949326e84237645',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5a5arwy3',
                  apiId: '941ecde2-1601-4439-a651-406a50ebabdd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eric-edouard/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5a5arwy3.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
