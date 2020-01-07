import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "AWS Lambda Pitfalls"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img
          style={{ margin: 0, height: 80 }}
          src="./AWS-Lambda_light-bg.svg"
          alt="AWS Lambda"
        />
        <p>
          In this blog I'll post a series of articles with some common and less
          common pitfalls I've encountered using the AWS Lambda service in
          different production environments for almost 2 years now.
        </p>

        <p>
          If you are just getting started on AWS, you might be able to prevent
          some mistakes I've made, if you are already using the service, there
          might still be some situation which you haven't encountered, or
          experiencing at this moment and got you here in the first place!
        </p>

        <p>
          I've been using Lambda functions in different use cases, being invoked
          from AppSync's GraphQL service, API Gateway, S3 events, custom
          authorizers (API Gateway), SQS, SNS, step functions, Cognito triggers,
          cloudwatch and maybe some more?
          <br />
          Not all of the topics are applicable to all use cases, and I'll try to
          elobarate on where you will encounter them as much as possible.
        </p>

        <p>
          I've got some pretty good idea about what I'dd like to share with you.
          But, doing freelance work and having a family with two kids, time is
          not always on my hand.
          <br />I already created an index of topics which I will be covering,
          and I will add the links as soon as I published an article covering
          it.
        </p>

        <p>
          If you feel you can contribute to the articles,{" "}
          <a
            href="https://github.com/michel-schreurs/aws-lambda-blog"
            target="_blank"
          >
            make a PR and I'll mention you in the contributors section
          </a>
          !
        </p>

        {/* <Link to="/blog/">
          <Button marginTop="35px">Check out the Blog</Button>
        </Link> */}
      </Layout>
    )
  }
}

export default IndexPage
