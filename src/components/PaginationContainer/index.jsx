import React, { useState, useEffect } from 'react'

const PAGE_ITEMS = 3

const PaginationContainer = ({ items, className }) => {
  const [page, setPage] = useState(0)

  useEffect(() => {
    
  }, [page])

  const renderPages = () => {
    const pageNumbers = []

    for (let i = 1; i <= items.length; i++) {
      pageNumbers.push(
        <li>
          <div>{i}</div>
          <div>{items[i]} </div>
        </li>
      )
    }

    return pageNumbers
  }

  return (
    <>
      <ul className="pagination-list">{renderPages()}</ul>
      <div className="pagination-list__controls"> - * *  +</div>
    </>
  )
}

export default PaginationContainer
