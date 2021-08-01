
import './App.css';
import NavBar from './navbar/NavBar';
import Projects from './navbar/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Contact } from './navbar/Contact';
import { About } from './navbar/About';
import { Home } from './navbar/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
          <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
