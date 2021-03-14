import '../css/App.css';
import { Grommet } from "grommet";
import { Box, Text } from "grommet";
import MainHeader from '../components/MainHeader/MainHeader'
import Map from '../components/Map/Map'


function App() {

  return (
    <Box>
      <MainHeader />
      <Map></Map>
    </Box>
  );
}

export default App;