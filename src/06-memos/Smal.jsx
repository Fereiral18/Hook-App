import React from "react"


export const Smal = React.memo(({ value }) => {
  
  console.log('me volvi a dibujar')
  
    return (
    <small>{ value }</small>
  ) 
})
