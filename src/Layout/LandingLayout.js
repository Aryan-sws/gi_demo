import React from 'react'
import Footer from '../components/common/Footer/Footer'
import Header from '../components/common/Header/Header'

const LandingLayout = (props) => {
  return (
    <>
        <Header/>
            {props.children}
        <Footer/>
    </>
  )
}

export default LandingLayout