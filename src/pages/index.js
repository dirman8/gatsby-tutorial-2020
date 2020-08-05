import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div>
        <h1 style={{ color: "blue", textTransform: "uppercase" }}>
          Hello People
        </h1>
        <div>
          <Link to="/blog/">blog page</Link>
        </div>
        <a href="/https://www.gatsbyjs.org">gatsby docs</a>
      </div>
    </Layout>
  )
}
