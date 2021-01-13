import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display:flex;
    justify-content: center;
    padding-bottom: 3rem;
    @media(min-width:768px){
        padding-bottom:0;
    }
`;

const Navlink = styled(Link)`
    color: #ffffff;
    font-size:1.6rem;
    font-weight:700;
    line-height: 1rem;
    font-family:'Open Sans', sans-serif;
    text-decoration: none;
    padding:1rem;
    margin-right:1.2rem;

    &:last-of-type{
        margin-right:0;
    }

    &.actual{
        border-bottom: 2px solid #ffffff;
    }
`;

const Navegacion = () => {
    return ( 
        <Nav>
            <Navlink to={'/'} activeClassName="actual">Inicio</Navlink>
            <Navlink to={'/nosotros'} activeClassName="actual">Nosotros</Navlink>
        </Nav>
     );
}
 
export default Navegacion;
