import React from 'react'
import NavCyberethic from '../components/NavCyberethic'
function Template({children}) {
  return (
    <>
    <NavCyberethic/>
    {children}
    </>
  )
}

export default Template