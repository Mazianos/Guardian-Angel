import React, { Component, useCallback } from 'react';
import app from "../../firebase";
import { Box, Text, Heading, FormField, TextInput, Grommet, Button } from "grommet";
import { Hide, View } from 'grommet-icons';
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Login() {
    const [text, setText] = React.useState('');
    const [value, setValue] = React.useState('');
    const [reveal, setReveal] = React.useState(true);
    const history = useHistory();
    const handleSignUp = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(text, value);
            if (firebase.auth().currentUser != null) {
                console.log(firebase.auth().currentUser.email);
                localStorage.setItem('email', firebase.auth().currentUser.email)
            }
            let path = '/';
            history.push(path);

        } catch (error) {
            alert(error);
        }
    };

    setTimeout(
        () => setReveal(false),
        10
    );

    function refreshPage() {
        setTimeout(() => {
            window.location.reload(false);
        }, 500);
        console.log('page to reload')
    }
    AOS.init();

    return (
        <Box background="#7D4CDB" style={{
            height: '100vh'
        }}
            align='center'>
            <Box width="large" align='start' >
                <Box margin="large">
                    <div data-aos="fade-down">
                        <Heading
                            size="medium"
                        >Login
                    </Heading>
                    </div>
                    <Grommet
                        theme={
                            {
                                textInput: {
                                    extend: () => `
                                        font-size: 20px;
                                        border: 0px
                                      `,
                                },
                            }
                        }
                    >
                        <div data-aos="fade-up-right">

                            <FormField label="Email address">
                                <Box>
                                    <TextInput
                                        plain
                                        style={{ borderRadius: "12px" }}
                                        value={text}
                                        onChange={event => setText(event.target.value)}
                                        placeholder="type here"

                                    />
                                </Box>
                            </FormField>
                        </div>

                        <div data-aos="fade-up-left">

                            <FormField label="Password">
                                <Box
                                    direction='row'
                                >
                                    <TextInput
                                        plain
                                        style={{ borderRadius: "12px" }}
                                        type={reveal ? 'text' : 'password'}
                                        value={value}
                                        onChange={event => setValue(event.target.value)}
                                        placeholder="type here"
                                        disabled={text.length == 0}

                                    />
                                    <Button
                                        icon={reveal ? <View size="medium" color="white" /> : <Hide size="medium" color="white" />}
                                        onClick={() => setReveal(!reveal)}
                                    />
                                </Box>
                            </FormField>
                        </div>
                    </Grommet>
                </Box>
            </Box>
            <Box width='small' margin="small" align="center">
                <div data-aos="fade-up">
                    <Button
                        type="submit"
                        label="Login"
                        secondary
                        disabled={!text.includes("@")}
                        onClick={() => { handleSignUp(); refreshPage() }} />
                </div>
            </Box>
        </Box >
    );
}

export default Login;

