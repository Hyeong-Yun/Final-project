import React, { useEffect, useState } from 'react'
import { Container, SaleContainer, 
    Sale, Sale2,RestTime ,Ptext , 
    ClockContainer,ClockImgContainer, SaleImgContainer,Image,Sale2ImgContainer,
    ClockImg, Clock, Image2, TextPrice, 
    TextTitle, TextTitle2, TextSpan, PriceP, TextContainer, PriceText} from './Recommend-style'


export default function Recomend() {
    const [hour, setHour] = useState(23 - new Date().getHours());
    const [minute, setMinute] = useState(59 - new Date().getMinutes());
    const [second, setSecond] = useState(59 - new Date().getSeconds());

    useEffect(() => {
        const id = setInterval(() => {
        setHour(23 - new Date().getHours());
        setMinute(59 - new Date().getMinutes());
        setSecond(59 - new Date().getSeconds());
    }, 1000);
    // 1초마다 실행되는 인터벌을 이용해 1초마다 다시 랜더링 시켜줌
    return () => clearInterval(id);
    // 페이지를 벗어나게되면 반복을 종료해줌
    }, [])

    

  return (
    <Container>
        <Ptext>오늘의 추천!<p className='text-sm'>서두르지 않으면 품절이에요!</p></Ptext>
        <ClockContainer>
            <ClockImgContainer>
                <Clock>
                    <p>남은 시간</p>
                    <RestTime>{hour < 10 ? '0' + hour : hour} : {minute < 10 ? '0' + minute : minute} : {second < 10 ? '0' + second : second}</RestTime>
                </Clock>
                <ClockImg />
            </ClockImgContainer>
            <SaleContainer>
                <Sale>
                    <SaleImgContainer>
                        <Image></Image>
                    </SaleImgContainer>                    
                      <TextTitle>인기 물놀이 용품</TextTitle>                  
                      <TextContainer>
                        <TextSpan>30%</TextSpan>
                        <TextPrice>13,900</TextPrice>
                        
                    </TextContainer>
                    <TextContainer>
                    <PriceText>9,700원~</PriceText>     
                    </TextContainer>
                    <PriceP>무더위엔 물놀이가 제격! 인기 물놀이 용품 특가!</PriceP>
                </Sale>
                <Sale2>
                    <Sale2ImgContainer>
                        <Image2></Image2>
                    </Sale2ImgContainer>
                    <TextTitle2>닌텐도 [사전예약] 스위치 피크민 4</TextTitle2>
                    <TextContainer>
                        <TextSpan>30%</TextSpan>
                        <TextPrice>13,900</TextPrice>
                    </TextContainer>
                    <PriceP>사전예약 구매하고! 스페셜 특선가지 Get!</PriceP>
                </Sale2>
            </SaleContainer>
        </ClockContainer>
    </Container>
  )
}
