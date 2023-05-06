import classNames from 'classnames'

import Icon from '../Icon'

const Modal = ({ children, className, modalIsOpen, toggleModal }) => {
  const elClassName = classNames('modal', className, {
    modal__open: modalIsOpen,
    modal__hidden: !modalIsOpen,
  })

  return (
    <div className={elClassName}>
      <div className="modal__wrapper">
        <button className="modal__close" onClick={toggleModal}>
          <Icon iconName="close" />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
