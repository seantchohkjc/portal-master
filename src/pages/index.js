import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/_common/layout"
import Seo from "../components/_common/seo"

import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/main.scss';

// components
import ProductCard from "../components/product-card"

// markup <title>Home Page</title>
const IndexPage = () => {
  return (
    <Layout>
      <Seo title="HKJC Members' Portal" />
      
      HELLO

      

      <ul>
        <li><Link to="/index_bak">index back</Link></li>
        <li><Link to="/levade/categories">Product Listing Page</Link></li>
        <li><Link to="/prototypes">Prototype Page</Link></li>
      </ul>
      
    </Layout>
  )
}

export default IndexPage