const ListITem = ({ listMarker, children }) => {
  return (
    <li className="pagination__list-item list-item">
      <div className="list-item__marker">{listMarker}</div>
      <div className="list-item__text">{children} </div>
    </li>
  )
}

export default ListITem
