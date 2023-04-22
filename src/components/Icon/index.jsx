/* eslint-disable no-unused-vars */
import arrow from '../../assets/images/arrow.png'
import home from '../../assets/images/home.png'
import logo from '../../assets/images/logo.png'
import plus from '../../assets/images/plus.png'
import meal from '../../assets/images/iconMeal.png'
import regimen from '../../assets/images/iconRegimen.png'
import close from '../../assets/images/close.png'

const iconMap = {
  arrow: arrow,
  home: home,
  logo: logo,
  plus: plus,
  meal: meal, 
  regimen: regimen,
  close: close
}

const Icon = ({ iconName, className }) => {
  const icon = iconMap[iconName]

  return <img src={icon} className={className} alt={iconName}/>
}

export default Icon
