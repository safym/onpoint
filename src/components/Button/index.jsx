function Button(props) {
  const { callback, children } = props

  return (
    <button className="button" onClick={callback}>
      {children}
    </button>
  )
}

export default Button