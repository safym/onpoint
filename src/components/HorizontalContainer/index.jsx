import React, { useRef, useEffect } from 'react'
import Button from '../Button'

import Title from '../Title'

function HorizontalContainer() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const container = scrollRef.current
    const vw = window.innerWidth

    if (container) {
      const onWheel = (e) => {
        const offsetY = e.deltaY

        if (offsetY === 0) return

        e.preventDefault()

        if (offsetY > 0) {
          container.scrollTo({
            left: container.scrollLeft + vw,
            behavior: 'smooth',
          })
        } else {
          container.scrollTo({
            left: container.scrollLeft - vw,
            behavior: 'smooth',
          })
        }
      }
      container.addEventListener('wheel', onWheel)
      return () => container.removeEventListener('wheel', onWheel)
    }
  }, [])

  const moveToSlide = (pageNum) => {
    const container = scrollRef.current
    const vw = window.innerWidth

    container.scrollTo({
      left: pageNum * vw,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <header className="header">
        <button onClick={() => moveToSlide(0)}>home</button>
        <button onClick={() => moveToSlide(1)}>PROJECT</button>
      </header>
      <div className="container" ref={scrollRef}>
        <div className="slide">
          <Title size="small">привет,</Title>
          <Title size="small">
            это не <br/>
            коммерческое <br/>
            задание
          </Title>
          <Button>Что дальше?</Button>
        </div>
        <div className="slide">2</div>
        <div className="slide">3</div>
      </div>
    </>
  )
}

export default HorizontalContainer
