import React from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: #141414;
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    text-align: center;
`;

function Default({children}){
    return (
        <>
        <Menu />
        <Main>
            {children}
        </Main>
        <Footer />
        </>
    );
}


export default Default;