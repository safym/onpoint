const Page = ({ className, children, modalIsOpen }) => {
  return (
    <>
      {modalIsOpen && <div className="page__modal-shadow"></div>}

      <div className="page">
        <div className="page__content-wrapper">
          <div className={`page__${className} ${className}`}>{children}</div>
        </div>
      </div>
    </>
  )
}

export default Page
