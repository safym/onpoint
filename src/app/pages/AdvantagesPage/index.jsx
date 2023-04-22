import React, { useState } from 'react'

import Page from '../../../components/Page'
import Title from '../../../components/Title'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import FloatingElement from '../../../components/FloatingElement'

import bottle from '../../../assets/images/bottle.png'
import Modal from '../../../components/Modal'
import PaginationContainer from '../../../components/PaginationContainer'

const advantagesList = [
  'Lorem ipsum dolor sit amet, consectetur  adipiscing elit',
  'Faucibus pulvinar elementum integer enim',
  'Faucibus pulvinar elementum integer enim',
  'Mi bibendum neque egestas congue quisque  egestas diam',
  'Venenatis lectus magna fringilla urna',
  'Venenatis lectus magna fringilla urna',
]

function MessagePage() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <>
      <Modal
        className="advantages-page__modal"
        modalIsOpen={modalIsOpen}
        toggleModal={toggleModal}
      >
        <div className="advantages-page__title">
          <Title size="small">преимущества</Title>
          <Title size="medium">
            brend <span className="bold">XY</span>
          </Title>
        </div>

        <PaginationContainer items={advantagesList} />
      </Modal>

      <Page className={'advantages-page'}>
        <img className="advantages-page__image" src={bottle} alt="bottle" />
        <div className="advantages-page__content-wrapper">
          <div className="advantages-page__title">
            <div className="advantages-page__title-wrapper">
              <Title size="small">ключевое сообщение</Title>
              <Title size="medium">
                brend <span className="bold">XY</span>
              </Title>
            </div>
          </div>

          <Card className="advantages-page__meal" iconName="meal">
            Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum
            lorem sed risus ultricies
          </Card>

          <Card className="advantages-page__regimen" iconName="regimen">
            Aarcu cursus vitae
          </Card>

          <div className="advantages-page__button-wrapper">
            <Button
              key="btn-more"
              className="advantages-page__button"
              icon="plus"
              onClick={toggleModal}
            >
              Подробнее
            </Button>
          </div>
        </div>

        <FloatingElement
          imageName="blueBubble1"
          className="advantages-page__img-1"
        />
        <FloatingElement
          imageName="blueBubble2"
          className="advantages-page__img-2"
        />
        <FloatingElement
          imageName="blueBubble2"
          className="advantages-page__img-3"
        />
        <FloatingElement
          imageName="blueBubble2"
          className="advantages-page__img-4"
        />
        <FloatingElement
          imageName="blueBubble2"
          className="advantages-page__img-5"
        />
        <FloatingElement
          imageName="pinkBubble1"
          className="advantages-page__img-6"
        />
        <FloatingElement
          imageName="pinkBubble2"
          className="advantages-page__img-7"
        />
        <FloatingElement
          imageName="pinkBubble2"
          className="advantages-page__img-8"
        />
      </Page>
    </>
  )
}

export default MessagePage
