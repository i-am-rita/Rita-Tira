import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import * as styles from "../styles/about.module.css"

export default function About() {
  return (
    <Layout>
      <div className={styles.about}>
        <h2>My names are Chidinma Rita Uzoma</h2>
        <p>
          I am a violinist by day and a Frontend Developer by night. I could be
          viceversa if I have to finish up a task or just the latter for a whole
          day.
        </p>
        <p>
          I love brain-tasking and find it hard to concentrate if my code
          doesn't seem to work or if i have to go through the docs of a
          framework before fixing the bug in my code.... it sucks:) but it's a
          lot of fun you know.
        </p>

        <h3>
          I enjoy working with React, Html, JavaScript, Gatsby, Css, Bootstrap,
          Github and some other cool tools.
        </h3>
        <p>
          You should take a look at
          <Link className={styles.btn} to="/projects">
            My Projects
          </Link>
        </p>
      </div>
    </Layout>
  )
}

// export const query = graphql`
//   query Banner {
//     file(relativePath: { eq: "banner.JPG" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
