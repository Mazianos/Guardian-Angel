import '../css/App.css';
import { Grommet } from "grommet";
import { Box, Text } from "grommet";
import MainHeader from '../components/MainHeader/MainHeader'
import Map from '../components/Map/Map'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../auth';
import { Link } from 'react-router-dom';
import Signup from './Signup/Signup'
<<<<<<< HEAD

=======
const style = { textDecoration: 'none', color: 'white' };
>>>>>>> 78f8d98df8e54717fb3e82e773312637987b72be

function App() {

  return (
    <AuthProvider>
      <Box>
        <Router>
          <MainHeader
            signup={<Link to="/signup" style={style} >Signup</Link>}
            login={<Link to="/login" style={style}>Login</Link>}
            map={<Link to="/" style={style}>Home</Link>}
            contactus={<Link to="/contactus" style={style}>Contact us</Link>}
          />

          <Route path="/" exact component={Map} />
          <Route path="/signup" exact component={Signup} />
        </Router>
      </Box>
<<<<<<< HEAD
=======

>>>>>>> 78f8d98df8e54717fb3e82e773312637987b72be
    </AuthProvider>
  );
}

export default App;