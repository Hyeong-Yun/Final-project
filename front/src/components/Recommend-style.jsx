import { styled } from "styled-components";

export const Container = styled.section`
    width : 100%;
    display: flex;
    justify-content: center;
    margin: 40px 0;
    flex-direction: column;
    align-items: center;
`

export const Ptext = styled.p`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin: 20px 0;
`

export const ClockContainer = styled.div`
    height : 100px;
    width: 75%;
    

`

export const ClockImgContainer = styled.div`
    position: relative;
    width: 100%;
`

export const ClockImg = styled.img.attrs({
    src: "https://static.lotteon.com/p/display/plugin/assets/img/dummy_img_d_timedeal_01_01_343x100.png"

})`
    height: 150px;
    width: 100%;
    border-radius: 20px;
`

export const Clock = styled.p`
    position: absolute;
    width: 100%;
    color: white;
    font-size: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
`
export const RestTime = styled.p`
    font-size: 50px;
    padding: 10px 0;
`

export const SaleContainer = styled.div`
    width: 100%; 
    display: flex;
    justify-content:space-between; 
    margin-top: 20px;
`

export const Sale = styled.div`
    height: 500px;
    width: 48%;
`

export const Sale2 = styled.div`
    height: 500px;
    width: 48%;
`

export const SaleImgContainer = styled.div`
    
`
export const Image = styled.img.attrs({
    src : `https://contents.lotteon.com/itemimage/_v060759/LM/21/41/95/50/30/bndl_img/LM2141955030_1.jpg/dims/resizef/555x555`
})`
`

export const Sale2ImgContainer = styled.div`
    
`
export const Image2 = styled.img.attrs({
    src : `https://contents.lotteon.com/itemimage/_v101523/LM/49/02/37/05/51/16/7_/00/1/LM4902370551167_001_1.jpg/dims/resizef/555x555`
})`
`

export const TextContainer = styled.div`
    width: 100%;  
    display: flex;
    
`
export const TextTitle = styled.p`
    font-size: 12px;
`

export const TextTitle2 = styled.p`
    font-size: 12px;
`

export const TextPrice = styled.p`
    font-size: 10px;
    text-decoration-line: line-through;
`
export const TextSpan = styled.span`
    font-size: 10px;
    color: red;
    margin-right: 5px;
`

export const PriceText = styled.p`
    font-size: 12px;
    font-weight: bold
`

export const PriceP = styled.p`
    font-size: 10px;
    margin-left: 2px;
    color: red;
`
