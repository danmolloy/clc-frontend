import './App.css';
import { Navbar } from './Navbar';
import { Home } from './Home'
import { Artists } from './Artists'
import { Songs } from './Songs'
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom'
import { SingleArtist } from './SingleArtist'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/artists/:artistName" component={SingleArtist} />
          <Route path="/artists" component={Artists} />
          <Route path="/songs" component={Songs} />
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
