// eslint-disable-next-line no-unused-vars
import React from 'react'

import {
    Container,
} from './styles';

export const Loading = () => {
  return (
    <Container>
        <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </Container>
  )
}
