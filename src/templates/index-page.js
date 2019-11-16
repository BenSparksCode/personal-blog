import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import paragraphs from "lines-to-paragraphs"

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'


export const IndexPageTemplate = ({
  image,
  title,
  quote,
  heading,
  description,
}) => (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,


          backgroundAttachment: `fixed`,
        }}
      >


        <div
          style={{

            height: '150px',
            lineHeight: '1',


          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{

              backgroundColor: 'white',
              color: '#2b2523',
              lineHeight: '1',
              padding: '0.7em 1.2em 0.8em 1.2em',
              border: "3px solid rgb(255, 30, 0)",
              // borderRadius: "10px",
              marginTop: "-15vh",
              boxShadow: "0 6px 12px 0 rgba(0,0,0,0.8)",
            }}
          >
            {title}
          </h1>

        </div>
        {/* <div
          style={{
            height: '150px',
            lineHeight: '1',
            textAlign: "center"
          }}
        >


          <h4
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              fontSize: "16px",
              backgroundColor: 'white',
              color: '#2b2523',
              lineHeight: '',
              padding: '0.7em 1.2em 0.8em 1.2em',
              border: "3px solid rgb(255, 30, 0)",
              // borderRadius: "10px",
              marginTop: "-10vh",
              boxShadow: "0 6px 12px 0 rgba(0,0,0,0.8)",
            }}
          >
            “{quote}”

          </h4>
        </div> */}
      </div>

      <section className="section section--gradient"
        style={{
          borderTop: "3px solid rgb(255, 30, 0)"
        }}
      >
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">

                  {/* <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <div dangerouslySetInnerHTML={{ __html: paragraphs(description) }} />
                  </div>
                </div> */}

                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest Posts
                  </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        More Posts!
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  quote: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        quote={frontmatter.quote}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        quote
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        mainpitch {
          title
          description
        }
        description
      }
    }
  }
`
