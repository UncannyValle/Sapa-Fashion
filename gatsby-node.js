const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(`
//     {
//       allShopifyProduct {
//         edges {
//           node {
//             handle
//           }
//         }
//       }
//     }
//   `).then(result => {
//     result.data.allShopifyProduct.edges.forEach(({ node }) => {
//       createPage({
//         path: `/product/${node.handle}/`,
//         component: path.resolve(`./src/templates/ProductPage/index.js`),
//         context: {
//           // Data passed to context is available
//           // in page queries as GraphQL variables.
//           handle: node.handle,
//         },
//       })
//     })
//   })
// }
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve('src/templates/ProductPage/index.js')
  const tagTemplate = path.resolve('src/templates/subproduct.js')
  return graphql(`
    query {
      allShopifyProduct(sort: {order: DESC, fields: handle}) {
        distinct(field: tags)
        edges {
          node {
            handle
          }
        }
      }
    }
    
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }

    // Create product pages
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      createPage({
        path: `/product/${node.handle}/`,
        component: productTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          handle: node.handle,
        },
      })
    })
    // Create tag pages
    result.data.allShopifyProduct.distinct.forEach((currentTag) => {
      createPage({
        path: `/allproducts/${currentTag}`.toLowerCase(),
        component: tagTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          tag: currentTag,
        },
      })
    })
  })
}
