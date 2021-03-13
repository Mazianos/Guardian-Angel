import React from "react";
import { Box, Text, Image, Button, Avatar, Grommet } from 'grommet';

class MainHeaderButtons extends React.Component {
    render() {
        return (
            <Box direction="row" gap='small'>

                <Button
                    primary
                    size='small'
                    color="#B27AFF"
                    label="Sign up"

                >
                </Button>
                <Button
                    primary
                    size='small'
                    color="#B27AFF"
                    label="Log in"

                >
                </Button>

            </Box>
        )
    }
}

export default MainHeaderButtons;