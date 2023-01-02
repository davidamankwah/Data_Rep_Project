import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //boostrap css
import './App.css';
import Navbar from 'react-bootstrap/Navbar'; //Navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';  //Navigate
import { ListPlanner } from './components/listplanner'; //list component
import { Home } from './components/home'; //home component
import { AddPlanner } from './components/addplanner'; //addplanner component
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'; //routes
import { EditPlan } from './components/editPlan'; //edit component

class App extends React.Component {
  render() { //render methd to dispay other componets 
    return (
      // navigation bar
      // routing allows navigation
      <Router>
        <div className="App">
          <Navbar bg="info" variant="white">
            <Container>
              {/* set up navbar to navigate to different components */}
              <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/listplanner">View Todo Plans</Nav.Link>
                <Nav.Link href="/addplanner">Add Tod Plans</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path='/' element={<Home />}></Route>     {/* navigate to the home component*/}
            <Route path='/listplanner' element={<ListPlanner />}></Route>   {/* navigate to the listplanner component*/}
            <Route path='/addplanner' element={<AddPlanner />}></Route>   {/* navigate to the addplanner component*/}
            <Route path='/editPlan/:id' element={<EditPlan></EditPlan>}></Route>{/*edit plan path*/}
          </Routes>

        </div>
      </Router>
    );
  }
}

export default App;
