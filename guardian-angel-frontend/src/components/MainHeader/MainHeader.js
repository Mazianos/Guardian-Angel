import React from "react";
import { Box, Text, Image, Button, Avatar, Grommet } from 'grommet';
import MainHeaderButtons from './MainHeaderButtons'

class MainHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 0,
            height: 0
        }
        window.addEventListener("resize", this.update);
    }
    componentDidMount() {
        this.update();
        console.log(process.env);
    }
    update = () => {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        });

    };

    render() {
        return (
            <Box background="#7D4CDB" height='xxsmall' pad='xsmall'>
                <Box direction='row' gap='small' margin={{ vertical: 'auto' }}>
                    <Avatar round='auto' src="../../../GAlogo.png" size="small" margin={{ vertical: 'auto' }}></Avatar>
                    <Text size="medium" weight="bold" margin={{ vertical: 'auto' }}>Guardian Angel</Text>
                    <MainHeaderButtons
                        width={this.state.width}
                        signup={this.props.signup}
                        login={this.props.login}
                        map={this.props.map}
                        faq={this.props.faq}
                        logout={this.props.logout}
                        contactus={this.props.contactus}
                    />
                </Box>

            </Box >
        )
    }
}

export default MainHeader;
