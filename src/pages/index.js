import React from "react"
import styles from "../css/main.module.css"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata

  return (
    <div>
      <div
        className={styles.hero_img}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${data.image.publicURL}")`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className={styles.main_content}>
          <div className={styles.main_wrapper}>
            <h1>{title}</h1>
            <p>{description}</p>
            <Link to="/blog">Onward... to the BLOG!!!</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    image: file(base: { eq: "imb_001.jpg" }) {
      publicURL
    }
  }
`
