import React from 'react'

import pinksperm from '../../assets/images/pinksperm.png'

const imageMap = {
  pinksperm: pinksperm,
}

const AppearElement = ({ imageName, className }) => {
  const image = imageMap[imageName]
  const elClassName = `appear-element ${className}`

  return (
    <div className={elClassName}>
      <img src={image} alt={imageName} />
    </div>
  )
}

export default AppearElement
