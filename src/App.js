import './App.css';
import { Header } from './Header';
import  TinderCards  from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      
        <Switch>
        <Route exact path="/chat/:person">
          <Header backButton = "/chat"/>
          <ChatScreen/>
          </Route>
        <Route exact path="/chat">
          <Header backButton = "/"/>
          <Chats/>
          </Route>
        <Route exact path="/">
          <Header/>
          <TinderCards/>
          <SwipeButtons/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;