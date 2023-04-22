import Card from '../Card'

function ScrollableBlock({ children, text }) {
  return (
    <Card className="scrollable-block">
      <div class="scrollable-block__content">
        <p>{children}</p>
      </div>
    </Card>
  )
}

export default ScrollableBlock
