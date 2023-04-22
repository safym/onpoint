import Icon from '../Icon'

function Button({ onClick, icon, className, children }) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
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
