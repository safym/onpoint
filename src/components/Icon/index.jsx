import arrow from '../../assets/icons/arrow.png'
import home from '../../assets/icons/home.png'
import logo from '../../assets/icons/logo.png'
import plus from '../../assets/icons/plus.png'
import meal from '../../assets/icons/iconMeal.png'
import regimen from '../../assets/icons/iconRegimen.png'
import close from '../../assets/icons/close.png'
import prev from '../../assets/icons/prev.png'
import next from '../../assets/icons/next.png'

const iconMap = {
  arrow: arrow,
  home: home,
  logo: logo,
  plus: plus,
  meal: meal, 
  regimen: regimen,
  close: close,
  prev: prev,
  next: next,
}

const Icon = ({ iconName, className }) => {
  const icon = iconMap[iconName]

  return <img src={icon} className={className} alt={iconName}/>
}

export default Icon
