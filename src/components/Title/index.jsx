import classNames from 'classnames'

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

  const elClassName = classNames('title', {
    [`title--${classModify}`]: classModify,
  })

  return <h1 className={elClassName}>{children}</h1>
}

export default Title
