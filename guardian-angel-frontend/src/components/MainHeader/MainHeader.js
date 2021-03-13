import React from "react";
import { Box, Text, Image, Button, Avatar, Grommet } from 'grommet';
import MainHeaderButtons from './MainHeaderButtons'

class MainHeader extends React.Component {
    render() {
        return (
            <Box background="#7D4CDB" height='xxsmall' pad='xsmall'>
                <Box direction='row' gap='small' basis="1/5">
                    <Avatar round='auto' src="../../../GAlogo.png" size="small" margin={{ vertical: 'auto' }}></Avatar>
                    <Text size="medium" weight="bold" margin={{ vertical: 'auto' }}>Gaurdian Angle</Text>

                    <Box style={{ position: 'absolute', right: '10px' }}>

                        <MainHeaderButtons />
                    </Box>
                </Box>

            </Box >
        )
    }
}

export default MainHeader;