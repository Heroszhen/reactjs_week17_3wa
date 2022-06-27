import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

//components
import Lesson1 from './components/lesson1/lesson1';
import Lesson2 from './components/lesson2/lesson2';
import Notfound from './components/notfound';
import Login from './components/login/login';
import Lesson3 from './components/lesson3/lesson3';
import Lesson4 from './components/lesson4/lesson4';
import Lesson5 from './components/lesson5/lesson5';

class App extends React.Component {
  constructor(){
    super();
    //attributs
    this.state = {
      router:""
    };
  }

  setRouter=(router)=>{
    this.setState({router:router});
  }

  render(){
    return (
      <div className="App" id="app">
        <div id="allrouters_wrap">
          <Router>
            {/* <div id="allrouters">
              <div>
                <div className="onerouter">
                  <Link to='/' className={this.state.router === "" ? "mt-2 mr-2 active" : "mt-2 mr-2"}  onClick={this.setRouter.bind(this,"")}>Lesson 1</Link>
                </div>
                <div  className="onerouter">
                  <Link to='/lesson2' className={this.state.router === "lesson2" ? "mt-2 mr-2 active" : "mt-2 mr-2"}  onClick={this.setRouter.bind(this,"lesson2")}>Lesson 2</Link>
                </div>
              </div>
            </div> */}
            <div id="pages">
              <Switch>
                <Route exact path="/" component={Lesson1} />
                <Route exact path="/lesson2" component={Lesson2} />
                <Route exact path="/lesson3" component={Lesson3} />
                <Route exact path="/lesson4" component={Lesson4} />
                <Route exact path="/lesson5" component={Lesson5} />
                <Route exact path="/connexion" component={Login} />
                <Route component={Notfound} />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
  
}

export default App;
