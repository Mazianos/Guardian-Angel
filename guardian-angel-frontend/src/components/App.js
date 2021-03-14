import '../css/App.css';
import { Grommet } from "grommet";
import { Box, Text } from "grommet";
import MainHeader from '../components/MainHeader/MainHeader'
import Map from '../components/Map/Map'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './Login/Login'
<<<<<<< HEAD
import { AuthProvider } from '../auth';
import { Link } from 'react-router-dom';
import Signup from './Signup/Signup'
=======
>>>>>>> parent of ff8c1a0 (connected router to pages)


function App() {

  return (
<<<<<<< HEAD
    <AuthProvider>
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
    </AuthProvider>
=======
    <Box>
      <MainHeader />
      <Router>

        <Route path="/" exact component={Map} />
        <Route path="/login" exact component={Login} />

      </Router>
    </Box>
>>>>>>> parent of ff8c1a0 (connected router to pages)
  );
}

export default App;