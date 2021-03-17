import React from "react"
import Layout from "../components/Layout"
// import Img from "gatsby-image"
import * as styles from "../styles/project-details.module.css"
import { graphql } from "gatsby"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        {/* <div>
          <Img fluid={data.childImageSharp.fluid} />
        </div> */}
        {/* it can lead to cross-site scripting attacks if your data is compromised*/}
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
