import React, { useRef, useEffect } from 'react'

import AdvantagesPage from '../../app/pages/AdvantagesPage'
import MessagePage from '../../app/pages/MessagePage'
import TitlePage from '../../app/pages/TitlePage'
import Header from '../Header'
import Icon from '../Icon'

function HorizontalContainer() {
  const [touchStart, setTouchStart] = React.useState(0)
  const [touchEnd, setTouchEnd] = React.useState(0)
  const [currentPage, setCurrentPage] = React.useState(0)
  const scrollRef = useRef(null)

  const pagesCount = 3
  const pagesList = Array.from(Array(pagesCount).keys())

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      moveToPage(currentPage + 1)
    }

    if (touchStart - touchEnd < -100) {
      moveToPage(currentPage - 1)
    }
  }

  useEffect(() => {
    const container = scrollRef.current
    container.style.transform = 'translateX(0vw)'

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
  }, [])

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
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        style={{ transform: 'translateX(0vw)' }}
      >
        <TitlePage />
        <MessagePage />
        <AdvantagesPage />
      </div>

      <Icon iconName={'logo'} className="logo" />
    </>
  )
}

export default HorizontalContainer
