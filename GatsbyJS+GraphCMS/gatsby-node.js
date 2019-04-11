const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const portfolioTemplate = path.resolve(`src/templates/portfolioTemplate.js`)
  const portfolioQuery = await graphql(`
    {
        portfolio {
          workses {
            id
            title
            description
            client
            demo
            slug
            image {
              handle
              altImage
            }
          }
        }
      }`
  );
  portfolioQuery.data.portfolio.workses.forEach(workses => {
    createPage({
      path: workses.slug,
      component: portfolioTemplate,
      context: {
        data: workses,
      }
    })
  })
}