import React from 'react'

import img from '../../Assets/feature_banner.png'
import styled  from 'styled-components';

const Img = styled.img`
    margin-left: 180px;
    margin-top: -50px;

`

export const Banner = () => {
  return (
    <div>
        <Img src={img} alt="/"/>
    </div>
  )
}
