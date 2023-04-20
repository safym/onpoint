function Button({ callback, icon, children }) {
  return (
    <button className="button" onClick={callback}>
      <span className="button__icon">{icon}</span>
      {children}
    </button>
  )
}

export default Button
