import React from "react";
import { Box, Text, Image, Button, Avatar, Grommet, Menu } from 'grommet';
import { Apps } from 'grommet-icons';


function MainHeaderButtons({ width, signup, login, map, contactus }) {


    return (
        <Box>
            {width > 550 ?
                <Box direction="row" gap='small' style={{ position: 'absolute', right: '10px', top: '8px' }}>
                    <Button
                        color='#B27AFF'
                        primary
                        style={{ padding: '5px', border: '2px solid white' }}>{signup}</Button>
                    <Button
                        color='#B27AFF'
                        primary
                        style={{ padding: '5px', border: '2px solid white' }}>{login}</Button>
                    <Button
                        color='#B27AFF'
                        primary
                        style={{ padding: '5px', border: '2px solid white' }}>{map}</Button>
                    <Button
                        color='#B27AFF'
                        primary
                        style={{ padding: '5px', border: '2px solid white' }}>{contactus}</Button>
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
        </Box>

    )
}

export default MainHeaderButtons;