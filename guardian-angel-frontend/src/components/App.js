import '../css/App.css';
import { Grommet } from "grommet";
import { Box, Text } from "grommet";
import MainHeader from '../components/MainHeader/MainHeader'
import Map from '../components/Map/Map'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Signup from './Signup/Signup'


function App() {

  return (
    <Box>
      <Router>
        <MainHeader
          signup={<Link to="/signup">Signup</Link>}
          login={<Link to="/login">Login</Link>}
          map={<Link to="/">Home</Link>}
          contactus={<Link to="/contactus">Contact us</Link>}
        />


        <Route path="/" exact component={Map} />
        <Route path="/signup" exact component={Signup} />
      </Router>
    </Box>
  );
}

export default App;