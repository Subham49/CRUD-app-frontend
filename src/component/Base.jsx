import React from 'react'
import CustomNavbar from './CustomNavbar'
import CustomFooter from './CustomFooter'

function Base({children}) {
  return (
    <>
        <CustomNavbar/>
        {children}
        <CustomFooter/>
    </>
  )
}

export default Base
