import classNames from 'classnames'

const Page = ({ className, children, modalIsOpen }) => {
  const pageClassName = classNames({
    [`page__${className}`]: className,
    className,
  })

  return (
    <>
      {modalIsOpen && <div className="page__modal-shadow"></div>}

      <div className="page">
        <div className="page__content-wrapper">
          <div className={pageClassName}>{children}</div>
        </div>
      </div>
    </>
  )
}

export default Page
