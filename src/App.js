import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Bloglist from './components/Bloglist';
import BlogDetails from './components/BlogDetails';
function App() {


  return (
    <div className="App">
  <Router>
                  <Navbar />
                  <div className="content">
              <Switch>
                  <Route exact path="/">

                <Home />             
              </Route>
              <Route path="/Create">
                    <Create />
              </Route>
              <Route path="/blogs/:id">
                   <BlogDetails />
              </Route>
          </Switch>

            </div>
        </Router>

       
    </div>
  );
}

export default App;
