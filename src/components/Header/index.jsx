import classNames from 'classnames'

import Icon from '../Icon/index.jsx'

const Header = ({ moveToPage }) => {
  const linkClassName = classNames('header__navlink', 'navlink')

  return (
    <header className="header">
      <nav>
        <button className={linkClassName} onClick={() => moveToPage(0)}>
          <Icon iconName={'home'} className="header__icon" />
        </button>
        <button className={linkClassName} onClick={() => moveToPage(1)}>
          project
        </button>
      </nav>
    </header>
  )
}

export default Header
