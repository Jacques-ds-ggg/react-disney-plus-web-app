import React, {useEffect} from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './viewers'
import Movies from './movies'
import db from '../firebase'
import { useDispatch } from "react-redux"
import { setMovies } from "../features/movie/movieSlice"

function Home() {
    const dispatch = useDispatch();

    useEffect(()=>{
        db.collection("movies").onSnapshot((snapshot)=>{
            let tempMovies = snapshot.docs.map((doc)=>{
                return { id: doc.id, ...doc.data() }
            })
            dispatch(setMovies(tempMovies));
            // console.log(tempMovies);
        })
        // console.log("Hello");
    }, {})



    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px); // from top to bottom of browser - header height
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before {
        background: url("/images/home-background.png") center center / cover;
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;

    }
`