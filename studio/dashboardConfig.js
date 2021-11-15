export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6191fa92edf7c8f1a64f1136',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-yvrb8ebc',
                  apiId: '8336afdc-122d-4997-84af-5fa856538c45'
                },
                {
                  buildHookId: '6191fa92efdea93f26a36729',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wyoq8qtx',
                  apiId: '7998a99d-6460-4772-8a18-b91be3c75390'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rmasonh18/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wyoq8qtx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
