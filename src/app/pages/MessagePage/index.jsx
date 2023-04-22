import React from 'react'

import Page from '../../../components/Page'
import Title from '../../../components/Title'
import ScrollableBlock from '../../../components/ScrollableBlock'

function MessagePage() {
  return (
    <Page className={'message-page'}>
      <Title size="small">
        текст <br />
        сообщения
      </Title>
      <ScrollableBlock />
    </Page>
  )
}

export default MessagePage
