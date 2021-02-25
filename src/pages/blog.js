import React from "react"
import styles from "../css/main.module.css"
import { graphql, Link } from "gatsby"

export default function blog({ data }) {
  const { posts } = data.blog

  return (
    <div className={styles.blog_container}>
      <Link to="/">Nope... take me back home</Link>

      <h1>The blog posts</h1>

      {posts.map(post => (
        <article key={post.id}>
          <Link to={post.fields.slug}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
          <small>
            {post.frontmatter.author}, {post.frontmatter.date}
          </small>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`
