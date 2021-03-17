const path = require("path")

// Will run at build time in a node environment
// we can run functions like fetching data and generate pages with the data based on template files
exports.createPages = async ({ graphql, actions }) => {
  // grab data we need to make pages for

  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/projects/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/project-details.js"),
      //   what variable we want to pass in when we generate the page
      context: { slug: node.frontmatter.slug } + "md",
    })
  })
}
