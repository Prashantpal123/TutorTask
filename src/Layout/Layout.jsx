import React from 'react'
import Header from '../components/Headers'
import TutorListing from '../Pages/TutorListing'

const Layout = () => {
  return (
    <div className=" bg-linear-to-b from-[#071923] to-[#02080d]  min-h-screen">
     <Header />
     <TutorListing />
    </div>
  )
}

export default Layout
