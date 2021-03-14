import '../css/App.css';
import { Box, Text } from "grommet";
import MainHeader from '../components/MainHeader/MainHeader';
import MapWrapper from '../components/Map/MapWrapper';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../auth';
import { Link } from 'react-router-dom';
import Signup from './Signup/Signup';
import Login from './Login/Login';
const style = { textDecoration: 'none', color: 'white' };

function App() {



  return (
    <AuthProvider>
      <Box>
        <Router>
          <MainHeader
            signup={<Link to="/signup" style={style} >Signup</Link>}
            login={<Link to="/login" style={style}>Login</Link>}
            map={<Link to="/" style={style}>Home</Link>}
            logout={<Link to="/" style={style}>Logout</Link>}
            contactus={<Link to="/contactus" style={style}>Contact us</Link>}
          />

          <Route path="/" exact component={MapWrapper} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
        </Router>
      </Box>
    </AuthProvider>
  );
}

export default App;