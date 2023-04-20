import React, { useRef, useEffect } from 'react'

import Button from '../Button'
import Title from '../Title'

import home from '../../assets/images/homeS.png'

function HorizontalContainer() {
  const scrollRef = useRef(null)
  const pagesCount = 3
  const pages = Array.from(Array(pagesCount).keys())

  useEffect(() => {
    const container = scrollRef.current
    container.style.transform = `translateX(0vw)`

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

        e.preventDefault()

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
    if (!pages.includes(pageNum)) return

    const container = scrollRef.current

    container.style.transform = `translateX(${-100 * pageNum}vw)`
  }

  return (
    <>
      <header className="header">
        <nav>
          <button
            className="header__navlink navlink"
            onClick={() => moveToPage(0)}
          >
            <img src={home} />
          </button>
          <button
            className="header__navlink navlink"
            onClick={() => moveToPage(1)}
          >
            project
          </button>
        </nav>
      </header>

      <div
        className="container"
        ref={scrollRef}
        style={{ transform: 'translateX(0vw)' }}
      >
        <div className="page">
          <Title size="small">привет,</Title>
          <Title size="large">
            это <span className="bold">не</span> <br />
            коммерческое <br />
            задание
          </Title>
          <Button className="button" icon="arrow">
            Что дальше?
          </Button>
        </div>
        <div className="page">2</div>
        <div className="page">3</div>
      </div>
    </>
  )
}

export default HorizontalContainer
