import React from "react";
import { Box, Text, Image, Button, Avatar, Grommet, Menu } from 'grommet';
import { Apps } from 'grommet-icons';
import firebase from 'firebase/app'

function MainHeaderButtons({ width, signup, login, map, faq, logout, contactus }) {



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
                    <Button
                        color='#B27AFF'
                        primary
                        style={{ padding: '5px', border: '2px solid white' }}>{contactus}</Button>
                </Box>
                :
                <Box direction="row" gap='small' style={{ position: 'absolute', right: '10px', top: '8px' }}>
                    <Text>{email}</Text>
                    <Menu
                        icon={<Apps></Apps>}
                        plain
                        items={
                            email && email != '' ?

                                [
                                    {
                                        label: 'Logout', onClick: () => {
                                            localStorage.setItem('email', ''); setEmail('')
                                        }
                                    },
                                    {
                                        label: 'Home', onClick: () => {
                                            window.location.href = "/"
                                        }
                                    },
                                    {
                                        label: 'FAQ', onClick: () => {
                                            window.location.href = "faq"
                                        }
                                    },
                                    {
                                        label: 'Contact Us', onClick: () => {
                                            window.location.href = "contactus"
                                        }
                                    },
                                ]
                                :
                                [
                                    {
                                        label: 'Signup', onClick: () => {
                                            window.location.href = "signup"
                                        }
                                    },
                                    {
                                        label: 'Login', onClick: () => {
                                            window.location.href = "login"
                                        }
                                    },
                                    {
                                        label: 'Home', onClick: () => {
                                            window.location.href = "/"
                                        }
                                    },
                                    {
                                        label: 'FAQ', onClick: () => {
                                            window.location.href = "faq"
                                        }
                                    },
                                    {
                                        label: 'Contact Us', onClick: () => {
                                            window.location.href = "contactus"
                                        }
                                    },
                                ]
                        }

                    >
                    </Menu>
                </Box>
            }
        </Box>

    )
}

export default MainHeaderButtons;