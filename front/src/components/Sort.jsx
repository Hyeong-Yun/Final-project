import React from 'react'
import {Container, Wrapper, ImgBox, Image, BoxContainer, Text} from './Sort-style'
import {sortData} from '../api/dummy';

export default function Sort() {
     const renderSlides = sortData.map(data => (
         <BoxContainer>
         <ImgBox key={data.alt}>
          <Image src={data.url} alt={data.alt} />  
         </ImgBox>
        <Text >
            {data.title}
        </Text>
       </BoxContainer>
     ));

  return (
    <Container>
        <Wrapper>
         {renderSlides}
         </Wrapper>
    </Container>
  )
}