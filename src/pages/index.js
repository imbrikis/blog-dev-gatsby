import React from "react"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to="/blog">Onward... to the BLOG!!!</Link>
      <img src={data.image.publicURL} alt="swirl" />
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
