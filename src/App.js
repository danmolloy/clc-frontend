import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home'
import { Artists } from './components/Artists'
import { Songs } from './components/Songs'
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom'
import { SingleArtist } from './components/SingleArtist'

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
