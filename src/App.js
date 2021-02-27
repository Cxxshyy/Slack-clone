import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import './App.css';
import {useEffect, useState} from 'react';
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import db from "./firebase";

function App() {

  const [rooms,setRooms] = useState([]);

  const [user,setUser] = useState();


const getChannels = () =>{
  db.collection('rooms').onSnapshot((snapshot) =>{
    setRooms(snapshot.docs.map((doc) =>{
      return {id: doc.id, name: doc.data().name}
      
    }))
  })
}


useEffect(() =>{
  getChannels();
}, [])



  return (
    <div className="App">
      
      <Router>
        {
          !user ?
          <Login />

        :
        <Container>
          <Header />
          <Main>
            <SideBar rooms = {rooms} />
            <Switch>
              <Route path = "/room">
                <Chat />
              </Route>
              <Route path = "/">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
}
      </Router>

    </div>
  );
}

export default App;


const Container = styled.div`
  width:100%;
  height:100vh;
  display:grid;
  grid-template-rows:38px auto;
`

const Main = styled.div`
  background:white;
  display:grid;
  grid-template-columns:260px auto;

`
