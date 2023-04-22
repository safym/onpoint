import React from 'react'

import Icon from '../Icon'

function Card({ children, iconName, className }) {
  return (
    <div className={`card ${className}`}>
      {iconName && (
        <Icon
          iconName={iconName}
          className={`card__icon ${className}-${iconName}`}
        />
      )}
      {children}
    </div>
  )
}

export default Card
