import React from 'react'
import classNames from 'classnames'

import pinksperm from '../../assets/images/pinkSperm.png'

const imageMap = {
  pinksperm: pinksperm,
}

const AppearElement = ({ imageName, className }) => {
  const image = imageMap[imageName]
  const elClassName = classNames('appear-element', className)

  return (
    <div className={elClassName}>
      <img src={image} alt={imageName} />
    </div>
  )
}

export default AppearElement
