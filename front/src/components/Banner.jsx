import {React, useState} from 'react'
import { Container,BoxContainer, Box, BoxWrapper, Description, DescriptionBox, Box2, Text, Image } from './Banner-style'
import { imageData, imageData2 } from '../api/dummy'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner() {
    const renderSlides = imageData.map((image,index, arr) => (
        <BoxContainer>    
                <Box key={image.alt}>
                    <Image src={image.url} alt={image.alt} /> 
                </Box>
                <Box key={imageData2.alt}>
                    <Image src={imageData2[index].url} alt={image.alt} /> 
                </Box>
        <DescriptionBox>
        </DescriptionBox>
      </BoxContainer>
    ));

    const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <Container>
        <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        >
            {renderSlides}
        </Carousel>
    </Container>
  )
}
