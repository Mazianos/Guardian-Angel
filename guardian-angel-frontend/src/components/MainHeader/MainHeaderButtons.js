import React from "react";
import { Box, Text, Image, Button, Avatar, Grommet, Menu } from 'grommet';
import { Apps } from 'grommet-icons';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Signup from '../Signup/Signup'
import Map from '../Map/Map'


function MainHeaderButtons({ signup, login, map, contactus, width }) {


    return (
        <Box>



            {width > 550 ?
                < Box direction="row" gap='small' style={{ position: 'absolute', right: '10px', top: '8px' }}>
                    {map}
                    {signup}
                    {contactus}
                    {login}
                    {/* <Button
                        primary
                        size='small'
                        color="#B27AFF"
                        label="Login / Signup"

                    >
                    </Button>


                    <Button
                        primary
                        size='small'
                        color="#B27AFF"
                        label="Register"

                    >
                    </Button>
                    <Button
                        primary
                        size='small'
                        color="#B27AFF"
                        label="Contact Us"

                    >
                    </Button> */}

                </Box>

                :
                <Box direction="row" gap='small' style={{ position: 'absolute', right: '10px', top: '8px' }}>
                    <Menu
                        icon={<Apps></Apps>}
                        color="red"
                        items={[
                            { label: 'Login / Signup', onClick: () => { } },
                            { label: 'Register', onClick: () => { } },
                            { label: 'Contact Us', onClick: () => { } },
                        ]}

                    >
                    </Menu>
                </Box>
            }
        </Box >

    )
}

export default MainHeaderButtons;