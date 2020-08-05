import React from "react"
import Layout from "../components/layout"
import styles from "../components/products.module.css"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  return (
    <Layout>
      <section className={styles.page}>
        {products.map((product) => {
          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid} alt={product.tittle}></Image>
              <h3>
                {product.title} <span>${product.price}</span>
              </h3>
              <Link to={`${product.slug}`}> more details </Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        tittle
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
