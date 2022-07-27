export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'Jackyso2000/recipt-test'
      }
    },
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
                  buildHookId: '62e15e92d9ee1932c8223b10',
                  title: 'Sanity Studio',
                  name: 'recipt-test-studio',
                  apiId: 'e64c4f14-d02b-4108-9597-ca77b8506a92'
                },
                {
                  buildHookId: '62e15e92910f033f89a980f5',
                  title: 'Website',
                  name: 'recipt-test',
                  apiId: '3d53298b-53b7-449c-b432-b66d72e0dbe0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jackyso2000/recipt-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://recipt-test.netlify.app', category: 'apps'}
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
