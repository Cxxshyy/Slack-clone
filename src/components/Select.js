import React from 'react'
import styled from "styled-components";

function select() {
    return (
        <Main>
        <Container src = "https://slack-clone-1e907.web.app/images/Happy%20Bunch%20-%20Chat.png"> 
        </Container>
            <Text> Select Channel or Create One</Text>
        </Main>
    )
}

export default select

const Container = styled.img`
height:200px;

`
const Text = styled.p`
font-weight:10px;


`
const Main = styled.div `
display: flex;
flex-direction: column;
align-items:center;

`