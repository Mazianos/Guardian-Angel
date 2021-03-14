import React from "react";
import { Box, Text, Image, Button, Avatar, Grommet, Menu } from 'grommet';
import { Apps } from 'grommet-icons';
import firebase from 'firebase/app'

function MainHeaderButtons({ width, signup, login, map, faq, logout }) {



    const [email, setEmail] = React.useState(localStorage.getItem('email') ? localStorage.getItem('email') : '');

    return (
        <Box>
            {width > 550 ?
                <Box direction="row" gap='small' style={{ position: 'absolute', right: '10px', top: '8px' }}>
                    {email && email != '' ?
                        <Box direction='row' gap="xsmall">

                            <Text weight="bold" margin={{ top: '5px' }}>{email}</Text>
                            <Button
                                color='#B27AFF'
                                primary
                                onClick={() => { localStorage.setItem('email', ''); setEmail('') }}
                                style={{ padding: '5px', border: '2px solid white' }}>{logout}</Button>
                        </Box >
                        :
                        <Box direction='row' gap="xsmall">
                            <Button
                                color='#B27AFF'
                                primary
                                style={{ padding: '5px', border: '2px solid white' }}>{signup}</Button>
                            <Button
                                color='#B27AFF'
                                primary
                                style={{ padding: '5px', border: '2px solid white' }}>{login}</Button>
                        </Box>
                    }

                    <Button
                        color='#B27AFF'
                        primary
                        style={{ padding: '5px', border: '2px solid white' }}>{map}</Button>
                    <Button
                        color='#B27AFF'
                        primary
                        style={{ padding: '5px', border: '2px solid white' }}>{faq}</Button>
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