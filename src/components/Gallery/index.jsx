import React, { useRef, useEffect } from 'react'

import AdvantagesPage from '../../app/pages/AdvantagesPage'
import MessagePage from '../../app/pages/MessagePage'
import TitlePage from '../../app/pages/TitlePage'
import Header from '../Header'
import Icon from '../Icon'

const TRANSLATE_RESET = 'translateX(0vw)'
const PAGES_COUNT = 3

const HorizontalContainer = () => {
  // Scrollable container ref
  const scrollRef = useRef(null)

  // Satart, end coords of mousemove/touchmove events
  const [touchStart, setTouchStart] = React.useState(null)
  const [touchEnd, setTouchEnd] = React.useState(null)

  // Current page state
  const [currentPage, setCurrentPage] = React.useState(0)

  // Array of pages index (for PAGES_COUNT = 3: pageList = [0, 1, 2])
  const pagesList = Array.from(Array(PAGES_COUNT).keys())

  // Handler of mousedown/touchstart events
  const handleSwipeStart = (e) => {
    setTouchEnd(null)

    if (e.type === 'touchstart') {
      setTouchStart(e.targetTouches[0].clientX)
    } else if (e.type === 'mousedown') {
      setTouchStart(e.clientX)
    }
  }

  // Handler of mousemove/touchmove events
  const handleSwipeMove = (e) => {
    if (e.type === 'touchmove') {
      setTouchEnd(e.targetTouches[0].clientX)
    } else if (e.type === 'mousemove') {
      setTouchEnd(e.clientX)
    }
  }

  // Handler of mouseup/touchend events
  const handleSwipeEnd = () => {
    if (!touchEnd || !touchEnd) return

    if (touchStart - touchEnd > 100) {
      moveToPage(currentPage + 1)
    } else if (touchStart - touchEnd < -100) {
      moveToPage(currentPage - 1)
    }
  }

  // Handler of scroll event (by wheel)
  useEffect(() => {
    const container = scrollRef.current
    container.style.transform = TRANSLATE_RESET

    if (container) {
      const onWheel = (e) => {
        const offsetY = e.deltaY

        if (offsetY === 0) return

        const transform = container.style.transform
        const value = parseInt(
          transform.substring(
            transform.indexOf('(') + 1,
            transform.indexOf('vw')
          )
        )

        const currentPageNum = Math.abs(Math.trunc(value / 100))

        if (offsetY > 0) {
          moveToPage(currentPageNum + 1)
        } else {
          moveToPage(currentPageNum - 1)
        }
      }
      container.addEventListener('wheel', onWheel)
      return () => container.removeEventListener('wheel', onWheel)
    }
  }, [scrollRef])

  // Move to page function - apply translateX to container using page index
  const moveToPage = (pageNum) => {
    if (!pagesList.includes(pageNum)) return

    setCurrentPage(pageNum)

    const container = scrollRef.current

    container.style.transform = `translateX(${-100 * pageNum}vw)`
  }

  return (
    <>
      <Header moveToPage={moveToPage} />
      <div
        className="container"
        ref={scrollRef}
        onTouchStart={handleSwipeStart}
        onTouchMove={handleSwipeMove}
        onTouchEnd={handleSwipeEnd}
        onMouseDown={handleSwipeStart}
        onMouseMove={handleSwipeMove}
        onMouseUp={handleSwipeEnd}
        style={{ transform: TRANSLATE_RESET }}
      >
        <TitlePage moveToPage={moveToPage} />
        <MessagePage />
        <AdvantagesPage />
      </div>

      <Icon iconName={'logo'} className="logo" />
    </>
  )
}

export default HorizontalContainer
