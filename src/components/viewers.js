import React from 'react'
import styled from 'styled-components'

function viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png"/>
            </Wrap>
        </Container>
    )
}

export default viewers

const Container = styled.div`
    margin-top:30px;                    // 30px empty space at top
    display: grid;                      // create a grid
    padding: 30px 0px 26px;             // sortcut: top right bottom left
    grid-gap: 25px;                     // add gap between every grid item
    grid-template-columns: repeat(5, minmax(0, 1fr));  // set 5 items per column
`
const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 8px 26px 38px -10px,
    rgb(0 0 0 / 73%) 8px 16px 18px -10px;               // box-shadow styling
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.49) 0s;
                                                        // Slow change on cursor

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {                                       // hover effect to the wrap div
        box-shadow: rgb(0 0 0 / 80%)8px 40px 58px -16px,
        rgb(0 0 0 / 73%) 8px 30px 22px -10px;             
        transform: scale(1.05);                     // size increase 5% on hover
        border-color: rgba(249, 249, 249, 0.8);     //highlight border

    }

`