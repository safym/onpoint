import React, { useState, useEffect } from 'react'

import ListItem from '../ListItem'
import Icon from '../Icon'
import classNames from 'classnames'

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
        <ListItem key={i} listMarker={listMarker}>
          {items[i]}
        </ListItem>
      )
    }

    setPages([...pageNumbers])

    const pagesLinks = []
    for (let i = 1; i <= totalPages; i++) {
      const linkClassName = classNames('pagination__page-link', {
        'pagination__page-link--active': page === i,
      })

      pagesLinks.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          className={linkClassName}
        ></button>
      )
    }

    setpagesLinks([...pagesLinks])
  }, [items, page, totalPages])

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
