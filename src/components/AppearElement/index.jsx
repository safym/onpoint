import React, { useEffect, useRef, useState } from 'react'

import pinksperm from '../../assets/images/pinksperm.png'

const imageMap = {
  pinksperm: pinksperm,
}

const AppearElement = ({ imageName, className }) => {
  const image = imageMap[imageName]

  return (
    <div
      className={`appear-element ${className}`}
    >
      <img src={image} alt={imageName} />
    </div>
  )
}

export default AppearElement
