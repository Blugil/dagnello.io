import * as React from "react"
import Layout from "../components/layout/layout"
import ResumeContent from "../components/resume/resume"
import { Helmet } from "react-helmet"

const Resume = () => {
  return (
    <React.Fragment>
      <Helmet>
          <title>Resume | Dominick Agnello</title>   
      </Helmet>
      <Layout render={<ResumeContent />}/>
    </React.Fragment>
  )
}

export default Resume;
