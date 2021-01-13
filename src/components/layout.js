import React from 'react';
import Helmet from 'react-helmet';
import {Global, css} from '@emotion/react';
import Header from './header';
import Footer from './footer';

export default function Layout(props) {
    return (
        <>    
            <Global
                styles={css`
                    html{
                        font-size:62.5%;
                        box-sizing:border-box;
                    }
                    *,*:before, *:after{
                        box-sizing:inherit;
                    }

                    body{
                        font-size:18px;
                        font-size:1.8rem;
                        line-height:1.5;
                        font-family:'Open Sans', sans-serif;
                    }
                    h1,h2,h3{
                        margin:0;
                        line-height:1.5;
                    }
                    h1,h2{
                        font-family: 'Yusei Magic', sans-serif;
                    }
                    h3{
                        font-family:'Open Sans', sans-serif;
                    }
                    ul{
                        list-style:none;
                        margin:0;
                        padding:0;
                    }
                `}
            />
            <Helmet>
                <title>Admin-Hotel</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Yusei+Magic&display=swap" rel="stylesheet"/>
            </Helmet>
            <Header/>
            {props.children}

            <Footer/>
        </>
    );
}