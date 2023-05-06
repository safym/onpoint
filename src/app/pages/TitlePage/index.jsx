import React from 'react'

import Page from '../../../components/Page'
import Title from '../../../components/Title'
import Button from '../../../components/Button'
import FloatingElement from '../../../components/FloatingElement'

const TitlePage = ({ moveToPage }) => {
  return (
    <Page className="title-page">
      <Title size="small">привет,</Title>
      <Title size="large">
        это
        <strong>не</strong>
        <br />
        коммерческое задание
      </Title>

      <Button
        key="btn-next"
        className="title-page__button"
        icon="arrow"
        onClick={() => moveToPage(1)}
      >
        Что дальше?
      </Button>

      <FloatingElement imageName="corpuscule1" className="title-page__img-1" />
      <FloatingElement imageName="corpuscule2" className="title-page__img-2" />
      <FloatingElement imageName="corpuscule2" className="title-page__img-3" />
      <FloatingElement imageName="corpuscule3" className="title-page__img-4" />
      <FloatingElement imageName="corpuscule4" className="title-page__img-5" />
      <FloatingElement
        imageName="corpusculeBlur"
        className="title-page__img-6"
      />
      <FloatingElement
        imageName="corpusculeBlur"
        className="title-page__img-7"
      />
      <FloatingElement imageName="pinksperm" className="title-page__img-8" />
      <FloatingElement imageName="pinksperm" className="title-page__img-9" />
    </Page>
  )
}

export default TitlePage
