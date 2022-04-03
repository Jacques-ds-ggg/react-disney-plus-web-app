import React from 'react';
import Styled from 'styled-components';
import { selectMovies } from "../features/movie/movieSlice";
import { useselector } from "react-redux";

export const movies = () => {
// function movies() {
    const movies = useselector(selectMovies);

    console.log("This is movies",movies);

    return (
        <Container>
            <h4>Reconmended for You</h4>
            <Content>
                <Wrap>
                    <img alt='' src="/images/Ford-Bronco-Badlands-Sasquatch-Two-Door-Concept-3.jpg"/>
                </Wrap>
                <Wrap>
                    <img alt='' src="/images/Ford-Bronco-Badlands-Sasquatch-Two-Door-Concept-3.jpg"/>
                </Wrap>
                <Wrap>
                    <img alt='' src="/images/Ford-Bronco-Badlands-Sasquatch-Two-Door-Concept-3.jpg"/>
                </Wrap>
                <Wrap>
                    <img alt='' src="/images/Ford-Bronco-Badlands-Sasquatch-Two-Door-Concept-3.jpg"/>
                </Wrap>
            </Content>
        </Container>
    )
}

export default movies

const Container = Styled.div`
    margin-bottom: 20px;

`

const Content = Styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, minmax(0,1fr));
`

const Wrap = Styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 8px 26px 38px -10px,
    rgb(0 0 0 / 73%) 8px 16px 18px -10px;   // box-shadow styling
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }

`
