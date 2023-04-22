import Icon from '../Icon'

const Header = ({ moveToPage }) => {
  return (
    <header className="header">
      <nav>
        <button
          className="header__navlink navlink"
          onClick={() => moveToPage(0)}
        >
          <Icon iconName={'home'} className="header__icon" />
        </button>
        <button
          className="header__navlink navlink"
          onClick={() => moveToPage(1)}
        >
          project
        </button>
      </nav>
    </header>
  )
}

export default Header
