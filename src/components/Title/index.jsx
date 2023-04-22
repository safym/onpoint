const Title = ({ size, children }) => {
  let classModify

  switch (size) {
  case 'small':
    classModify = 's'
    break
  case 'medium':
    classModify = 'm'
    break
  case 'large':
    classModify = 'l'
    break
  default:
    classModify = ''
  }

  return <h1 className={`title title--${classModify}`}>{children}</h1>
}

export default Title
