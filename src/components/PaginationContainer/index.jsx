import React, { useState, useEffect } from 'react'
import Icon from '../Icon'

const PAGE_ITEMS = 3
const START_PAGE = 1

const PaginationContainer = ({ items, className }) => {
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState([])
  const [pagesLinks, setpagesLinks] = useState([])
  const totalPages = Math.ceil(items.length / PAGE_ITEMS)

  useEffect(() => {
    const pageNumbers = []
    const startItem = PAGE_ITEMS * (page - 1)
    const endItem = startItem + PAGE_ITEMS - 1

    for (let i = startItem; i <= endItem; i++) {
      const listMarker = (i + 1).toString().padStart(2, '0')
      pageNumbers.push(
        <li className="pagination__list-item list-item">
          <div className="list-item__marker">{listMarker}</div>
          <div className="list-item__text">{items[i]} </div>
        </li>
      )
    }

    setPages([...pageNumbers])

    const pagesLinks = []
    for (let i = 1; i <= totalPages; i++) {
      pagesLinks.push(
        <button
          onClick={() => setPage(i)}
          className={`pagination__page-link ${
            page === i ? 'pagination__page-link--active' : ''
          }`}
        ></button>
      )
    }

    setpagesLinks([...pagesLinks])
  }, [page])

  const handlePageChange = (newPage) => {
    if (START_PAGE - 1 < newPage && newPage <= totalPages) {
      setPage(newPage)
    }
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">{pages}</ul>
      <div className="pagination__controls">
        <button
          className="pagination__control-link"
          onClick={() => handlePageChange(page - 1)}
        >
          <Icon iconName="prev" className={'pagination__control-link'} />
        </button>
        {pagesLinks}
        <button
          className="pagination__control-link"
          onClick={() => handlePageChange(page + 1)}
        >
          <Icon iconName="next" className={'pagination__control-link'} />
        </button>
      </div>
    </div>
  )
}

export default PaginationContainer
