import React from 'react'

import Page from '../../../components/Page'
import Title from '../../../components/Title'
import ScrollableBlock from '../../../components/ScrollableBlock'
import AppearElement from '../../../components/AppearElement'


function MessagePage() {
  return (
    <Page className={'message-page'}>
      <Title size="small">
        текст <br />
        сообщения
      </Title>
      <ScrollableBlock>
        <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam
        nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Vitae aliquet
        nec ullamcorper sit amet risus nullam eget felis. Nulla pharetra diam
        sit amet nisl. Eget nulla facilisi etiam dignissim diam quis enim
        lobortis. Est sit amet facilisis magna. Neque laoreet suspendisse
        interdum consectetur libero id. Nec ullamcorper sit amet risus nullam
        eget felis eget. Mollis aliquam ut porttitor leo a diam sollicitudin
        tempor id. Euismod quis viverra nibh cras pulvinar mattis nunc. Massa
        massa ultricies mi quis. Sit amet massa vitae tortor condimentum
        lacinia. Et malesuada fames ac turpis egestas integer eget. Elementum
        pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.
        Amet justo donec enim diam vulputate ut pharetra sit. Risus ultricies
        tristique nulla aliquet enim tortor at auctor. Velit sed ullamcorper
        morbi tincidunt ornare massa. Quis hendrerit dolor magna eget est lorem
        ipsum. Etiam dignissim diam quis enim. Gravida neque convallis a cras.
        Ut enim blandit volutpat maecenas volutpat. Mauris sit amet massa vitae
        tortor condimentum lacinia quis vel.
      </ScrollableBlock>

      <AppearElement imageName="pinksperm" className="message-page__img-1" />
      <AppearElement imageName="pinksperm" className="message-page__img-2" />
      <AppearElement imageName="pinksperm" className="message-page__img-3" />
      <AppearElement imageName="pinksperm" className="message-page__img-4" />
      <AppearElement imageName="pinksperm" className="message-page__img-5" />
    </Page>
  )
}

export default MessagePage
