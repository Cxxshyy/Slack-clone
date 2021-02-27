import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import './App.css';
import {useEffect, useState} from 'react';
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Select from "./components/Select";
import db from "./firebase";
import {auth, provider} from "./firebase";

function App() {

  const [rooms,setRooms] = useState([]);

  const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));


const getChannels = () =>{
  db.collection('rooms').onSnapshot((snapshot) =>{
    setRooms(snapshot.docs.map((doc) =>{
      return {id: doc.id, name: doc.data().name}
      
    }))
  })
}

const signOut = () => {
  auth.signOut().then(()=> {
    localStorage.removeItem('user');
    setUser(null);

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
          <Login  setUser= {setUser}/>

        :
        <Container>
          <Header user = {user} signOut = {signOut}/>
          <Main>
            <SideBar rooms = {rooms} />
            <Switch>
              <Route path = "/room/:channelId">
                <Chat  user = {user}/>
              </Route>
              <Route path = "/">
                <Select />
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
