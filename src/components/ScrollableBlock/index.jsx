import Card from '../Card'

function ScrollableBlock({ children, text }) {
  return (
    <>
      <div className="scrollable-block">
        <div class="scrollable-block__content">
          <p>{children}</p>
        </div>
      </div>
      <div className="scrollable-block__overflow-shadow"></div>
      <div className="scrollable-block__bg"></div>
    </>
  )
}

export default ScrollableBlock
