import React from "react"
import styles from "../css/main.module.css"
import { graphql, Link } from "gatsby"

const blogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <div>
      <Link to="/blog">All blog posts</Link>
      <h1 className={styles.frontmatter_title}>{post.frontmatter.title}</h1>
      <small>{post.frontmatter.date}</small>
      <div
        className={styles.blog_content}
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></div>
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
