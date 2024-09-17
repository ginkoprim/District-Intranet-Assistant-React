import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>District Intranet Assistant</title>
        <meta property="og:title" content="District Intranet Assistant" />
      </Helmet>
    </div>
  )
}

export default Home
