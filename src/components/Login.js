import React from 'react'
import styled from "styled-components";
import {auth,provider} from "../firebase";
function Login(props) {
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then ((result) =>{
            const newuser = {
                name:result.user.displayName,
                photo:result.user.photoURL,
            }
            localStorage.setItem('user',JSON.stringify(newuser))
            props.setUser(newuser);
            

        })
        .catch((error)=>{
            alert(error.message)
        })

    }



    return (
        <Container>
                <Content>
                <SlackImg src="https://stormotion.io/blog/content/images/2018/12/developer.gif" />
                <h1>Sign in Slack</h1>
                <SignInButton onClick = {()=>signIn()}>
                    Sign In With Google
                </SignInButton>
                </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
background: url(https://i.pinimg.com/originals/88/15/63/881563d6444b370fa4ceea0c3183bb4c.gif);
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
background-image: linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%);
    padding: 100px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`


const SlackImg = styled.img`
    height: 250px;

`

const ContainerImg = styled.img`
min-height: 100%;
min-width: 1024px;
width: 100%;
height: auto;
position: fixed;
top: 0;
left: 0;
`


const SignInButton = styled.button`
    margin-top:50px;
    cursor:pointer;
    font-size:15px;
    background-image: linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%);
    border:none;
       margin: 10px;
       padding: 15px 45px;
       text-align: center;
       text-transform: uppercase;
       transition: 0.5s;
       background-size: 200% auto;
       color: white;            
       box-shadow: 0 0 20px #eee;
       border-radius: 10px;
       display: block;
     

    :hover {
       background-position: right center; /* change the direction of the change here */
       color: #fff;
       text-decoration: none;
    }
     
    


`