import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <div>
            <Nav>
                <Logo src="/images/logo.svg"/>
                <NavMenu>
                    <a>
                        <img src="/images/home-icon.svg" />
                        <span>HOME</span>
                    </a>
                    <a>
                        <img src="/images/search-icon.svg" />
                        <span>SEARCH</span>
                    </a>
                    <a>
                        <img src="/images/watchlist-icon.svg" />
                        <span>WATCHLIST</span>
                    </a>
                    <a>
                        <img src="/images/original-icon.svg" />
                        <span>ORIGINALS</span>
                    </a>
                    <a>
                        <img src="/images/movie-icon.svg" />
                        <span>MOVIES</span>
                    </a>
                    <a>
                        <img src="/images/series-icon.svg" />
                        <span>SERIES</span>
                    </a>
                </NavMenu>
                <UserImage src="./images/pubg-user-img.jpg" />
            </Nav>
        </div>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-item: center;
    padding: 0 12px;
    pverflow-x: hidden;                     // contentoverflow view width
`
const Logo = styled.img`
    width: 80px;

`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 20px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                // top: 0;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);

            }
        }
        &:hover {
            span: after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImage = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;             // makes image round
    cursor: pointer;
    margin-top: 11px;               // move logo down 11px
    margin-right: 12px;             // move logo left 12px
`