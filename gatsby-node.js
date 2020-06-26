const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMdx {
          edges {
            node {
              body
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then((result) => {
      result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.slug,
          component: path.resolve(`./src/components/Layouts/PostLayout.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.frontmatter.slug,
          },
        });
      });
      resolve();
    });
  });
};
