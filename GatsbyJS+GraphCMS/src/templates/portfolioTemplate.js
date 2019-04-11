import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout/layout"
import './PortfolioTemplate.css'

const PortfolioTemplate = ({
  pageContext: {
    data: { title, description, client, demo, image: { handle, altImage } } }
}) => (
    <Layout className="portfolio-description">
      <div className="portfolio-description__wrapper">
        <div className="portfolio-description__wrapper-left">
          <img src={"https://media.graphcms.com/" + handle} alt={altImage} width='100%' />
        </div>
        <div className="portfolio-description__wrapper-right">
          <p>Title: {title}</p>
          <p>Description: {description}</p>
          <p>Client: {client}</p>
          <p>Demo: <a href={demo} target="_blank" rel="noopener noreferrer">Click</a></p>
        </div>
      </div>
      <Link to="/" className="go-home">Go to home</Link>
    </Layout>
  )

export default PortfolioTemplate