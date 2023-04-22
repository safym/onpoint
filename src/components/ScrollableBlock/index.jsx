const ScrollableBlock = ({ children }) => {
  return (
    <>
      <div className="scrollable-block">
        <div className="scrollable-block__content">
          <p>{children}</p>
        </div>
      </div>
      <div className="scrollable-block__overflow-shadow"></div>
      <div className="scrollable-block__bg"></div>
    </>
  )
}

export default ScrollableBlock
