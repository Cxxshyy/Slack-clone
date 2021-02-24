import React from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
function Chat() {
    return (
        <Container>
            <Header>
                <ChannelContainer>
                    <RoomContainer>
                        <Name>
                            # super room
                        </Name>
                        <StarIcon>
                            <StarBorderIcon/>
                        </StarIcon>
                    </RoomContainer>

                    <DetailsContainer>
                       <Name>
                            Details
                        </Name>
                        <InfoIcon>
                            <InfoOutlinedIcon/>
                     </InfoIcon>
                    </DetailsContainer>
                </ChannelContainer>
            </Header>
        </Container>
    )
}

export default Chat

const Container = styled.div`
padding-top:10px;

`

const Header = styled.div`
`

const ChannelContainer = styled.div`
color: white;
height: 50px;
display: flex;
align-items: center;
padding-left: 19px;
justify-content: space-between;
border-bottom: 1px solid  grey;

`

const Name = styled.div`
font-weight:bold;
padding-right:10px;
`

const StarIcon = styled.div`
width: 20px;
height: 20px;
background: white;
fill: #3F0E40;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 20px;
cursor: pointer;
`

const DetailsContainer = styled.div `
color: black;
display: flex;
align-items: center;
padding-left: 10px;
justify-content: flex;`

const InfoIcon = styled.div`
width: 20px;
height: 20px;
background: white;
fill: #3F0E40;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 20px;
cursor: pointer;`

const RoomContainer = styled.div`
color: black;
display: flex;
align-items: center;
padding-left: 19px;
justify-content: flex;

`