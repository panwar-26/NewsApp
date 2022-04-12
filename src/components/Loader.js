import React from 'react'
import Loading from "./1476.gif"

export default function Loader() {
  return (
    <div className="container text-center" style={{topMargin:"20px",bottomMargin:"20px"}}>
        <img src={Loading} alt="Loading" />
    </div>
  )
}


