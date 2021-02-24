import React from "react"
import { graphql, Link } from "gatsby"

const blogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <div>
      <Link to="/blog">All blog posts</Link>
      <h1>{post.frontmatter.title}</h1>
      <small>{post.frontmatter.date}</small>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </div>
  )
}

export default blogPost

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
