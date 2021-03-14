import '../css/App.css';
import { Grommet } from "grommet";
import { Box, Text } from "grommet";
import MainHeader from '../components/MainHeader/MainHeader'
import Map from '../components/Map/Map'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './Login/Login'


function App() {

  return (
    <Box>
      <MainHeader />
      <Router>

        <Route path="/" exact component={Map} />
        <Route path="/login" exact component={Login} />

      </Router>
    </Box>
  );
}

export default App;