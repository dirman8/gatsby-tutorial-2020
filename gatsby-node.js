const path = require("path")

// Creates Page Dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetProducts {
      product: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.product.nodes.forEach((product) => {
    createPage({
      path: `products/${product.slug}`,
      component: path.resolve(`src/templates/product-template.js`),
      context: { slug: product.slug },
    })
  })
}
