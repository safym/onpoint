import React from 'react'
import classNames from 'classnames'

import Icon from '../Icon'

const Card = ({ children, iconName, className }) => {
  const elClassName = classNames('card', className)

  const iconClassName = classNames('card__icon', {
    [`${className}-${iconName}`]: className && iconName,
  })

  return (
    <div className={elClassName}>
      {iconName && <Icon iconName={iconName} className={iconClassName} />}
      {children}
    </div>
  )
}

export default Card
