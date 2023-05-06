import React, { useRef, useState, useEffect, useCallback } from 'react'

const CustomScrollbar = ({ children }) => {
  // Elements refs
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const thumbRef = useRef(null)

  // Dragging state
  const [dragging, setDragging] = useState(false)

  // Offset by mouse/touch events (px)
  const [offsetY, setOffsetY] = useState(0)
  // Scrolbar thumb height
  const [thumbHeight, setThumbHeight] = useState(0)
  // Top position of thumb relative to the scrollable block (px)
  const [thumbTop, setThumbTop] = useState(0)
  // Top position of content relative to the scrollable block (px)
  const [contentTop, setContentTop] = useState(0)

  // Handler of mousedown/touchstart events
  const handleMouseDown = (event) => {
    setDragging(true)
    let offset

    if (event.type === 'touchstart') {
      offset = event.targetTouches[0].clientY - thumbRef.current.offsetTop
    } else if (event.type === 'mousedown') {
      offset = event.clientY - thumbRef.current.offsetTop
    }

    setOffsetY(offset)
  }

  // Handler of mousemove/touchmove events
  const handleMouseMove = useCallback(
    (event) => {
      if (dragging) {
        let newTop

        if (event.type === 'touchmove') {
          newTop = event.targetTouches[0].clientY - offsetY
        } else if (event.type === 'mousemove') {
          newTop = event.clientY - offsetY
        }

        const containerPos = containerRef.current.getBoundingClientRect()
        const contentPos = contentRef.current.getBoundingClientRect()

        if (containerPos.height >= newTop + thumbHeight && 0 <= newTop) {
          const direction = -1
          const contentTop = Math.round(
            (newTop * contentPos.height * direction) / containerPos.height
          )

          setThumbTop(newTop)
          setContentTop(contentTop)
        }
      }
    },
    [dragging, offsetY, thumbHeight]
  )

  // Handler of mouseup/touchend events
  const handleMouseUp = () => {
    setDragging(false)
  }

  // Set the thumb height depending on the height of the content
  useEffect(() => {
    const containerHeight = containerRef.current.clientHeight
    const contentHeight = contentRef.current.clientHeight
    const height = (containerHeight * containerHeight) / contentHeight

    setThumbHeight(Math.round(height))
  }, [containerRef, contentRef, thumbRef])

  // Add eventlisteners
  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchend', handleMouseUp)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('touchmove', handleMouseMove)

    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchend', handleMouseUp)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('touchmove', handleMouseMove)
    }
  }, [dragging, handleMouseMove])

  return (
    <div className="scrollable-block scrollable-block__container" ref={containerRef}>
      <div className="scrollable-block__content-wrapper">
        <div
          className="scrollable-block__content"
          ref={contentRef}
          style={{
            position: 'absolute',
            top: `${contentTop}px`,
          }}
        >
          {children}
        </div>
      </div>

      <div
        className="scrollable-block__thumb"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        style={{
          height: `${thumbHeight}px`,
          top: `${thumbTop}px`,
        }}
        ref={thumbRef}
      ></div>
      <div className="scrollable-block__line" />
    </div>
  )
}

export default CustomScrollbar
