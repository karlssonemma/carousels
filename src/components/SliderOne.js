import React, { useState } from 'react';
import styled from 'styled-components';
import { sliderdata } from '../data/sliderdata';

const Container = styled.div`
    max-width: 600px;
    width: 100%;
    background-color: pink;
    position: relative;
`;

const Image = styled.img`
    width: 600px;
    height: 300px;
    transition: .3s;
    object-fit: cover;
`;

const Slider = styled.div`

     &.slide {
        opacity: 0;
        transition: 1s;
    }

    &.active {
        opacity: 1;
        transition: 1s;
    }
`;

const StyledButton = styled.button`
    position: absolute;
    top: 50%;
    ${({ previous }) => previous && 'left: 60px'};
    ${({ next }) => next && 'right: 60px'};
    cursor: pointer;
`;

const SliderOne = () => {

    const [active, setActive] = useState(0);
    const length = sliderdata.length;

    const prevSlide = () => {
        setActive(active === 0 ? length - 1 : active - 1)
    }

    const nextSlide = () => {
        setActive(active === length - 1 ? 0 : active + 1)
    }

    return(
        <Container>
            <StyledButton previous onClick={() => prevSlide()}>--</StyledButton>
                {
                    sliderdata.map((item, i) => {
                        return(
                            <Slider className={i === active ? 'slide active' : 'slide'} key={i}>
                                {i === active && <Image src={item.url} />}
                            </Slider>
                        )
                    })
                }
            <StyledButton next onClick={() => nextSlide()}>--</StyledButton>
        </Container>
    )
}

export default SliderOne;