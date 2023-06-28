import React from 'react'
import { Container, Ptext } from './Search-style'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import {hotProduct} from '../api/dummy'
import ReactCardSlider from "react-card-slider-component";

export default function Search() {
  return (
    <Container>
        <Ptext>지금 많이 찾는 상품</Ptext>
        <ReactCardSlider slides={hotProduct}/>     
    </Container>
  )
}
