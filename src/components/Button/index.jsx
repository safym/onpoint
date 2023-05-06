import classNames from 'classnames'

import Icon from '../Icon'

const Button = ({ onClick, icon, className, children }) => {
  const elClassName = classNames('button', className)

  return (
    <button className={elClassName} onClick={onClick}>
      <div className="button__icon-border">
        <div className="button__icon-wrapper">
          <Icon className="button__icon" iconName={icon} />
        </div>
      </div>
      <span className="button__text-wrapper">{children}</span>
    </button>
  )
}

export default Button
