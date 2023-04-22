import React from 'react'

import Icon from '../Icon'

const Card = ({ children, iconName, className }) => {
  const elClassName = `card ${className}`
  const iconClassName = `card__icon ${className}-${iconName}`

  return (
    <div className={elClassName}>
      {iconName && <Icon iconName={iconName} className={iconClassName} />}
      {children}
    </div>
  )
}

export default Card
