import React from "react"
import Layout from "../components/layout/layout"
import Portfolios from "../components/portfolio/portfolio"
import './index.css'

const IndexPage = () => (
  <Layout>
    <div className="container">
      <Portfolios />
    </div>
  </Layout>
)

export default IndexPage
