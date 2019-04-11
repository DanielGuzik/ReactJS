import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby';
import './portfolio.css';

const Portfolios = () => (
  <StaticQuery
    render={({ allSitePage: { edges } }) => (
      <div className="portfolio-section">
        {edges.map(({
          node: {
            path, context: {
              data: { image, title } } }
        }) => (

            <Link key={path} to={path} className="portfolio-list">
              <div className="portfolio-list__wrapper">
                <img src={"https://media.graphcms.com/" + image.handle} alt="" width='100%' />
                <p>{title}</p>
              </div>
            </Link>

          ))}
      </div>
    )}

    query={graphql`
    {
      allSitePage(
        filter: { context: { data: { slug: { ne: null } } }}
      ) {
        edges {
          node {
            path
            component
            context {
              data {
                id
                title
                description
                client
                demo
                slug
                image {
                  handle
                  altImage
                }
              }
            }
          }
        }
      }
    }
  `}
  />
)
export default Portfolios