import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`
const Header = () => {
  const data = useStaticQuery(getData)
  console.log(data)
  return (
    <div>
      <h1>This is our Header</h1>
      <h2>Title : {data.site.siteMetadata.title}</h2>
      <h2>Name : {data.site.siteMetadata.person.name}</h2>
    </div>
  )
}

export default Header
