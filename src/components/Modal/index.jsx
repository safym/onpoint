import Icon from '../Icon'

const Modal = ({ children, className, modalIsOpen, toggleModal }) => {
  return (
    <div
      className={`modal ${className} ${
        modalIsOpen ? 'modal__open' : 'modal__hidden'
      }`}
    >
      <div className="modal__wrapper">
        <button className="modal__close" onClick={() => toggleModal()}>
          <Icon iconName="close" />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
