import React, { Component, useCallback } from 'react';
import app from "../../firebase";
import { Box, Text, Heading, FormField, TextInput, Grommet, Button } from "grommet";
import { Hide, View } from 'grommet-icons';
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

function Login() {
    const [text, setText] = React.useState('');
    const [value, setValue] = React.useState('');
    const [reveal, setReveal] = React.useState(true);
    const history = useHistory();
    const handleSignUp = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(text, value);
            if (firebase.auth().currentUser != null) {
                await console.log(firebase.auth().currentUser.email);
            }
            let path = '/'; 
            history.push(path);
            
        } catch (error) {
            alert(error);
        }
    };

    setTimeout(
        () => setReveal(false),
        200
    );


    return (
        <Box background="#7D4CDB" style={{
            height: '100vh'
        }}
            align='center'>
            <Box width="large" align='Start' >
                <Box margin="large">

                    <Heading
                        size="medium"
                    >Login
                    </Heading>

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
                    </Grommet>
                </Box>
            </Box>
            <Box width='small' margin="small" align="center">

                <Button
                    type="submit"
                    label="Login"
                    secondary
                    disabled={!text.includes("@")}
                    onClick={() => handleSignUp()} />
            </Box>
        </Box >
    );
}

export default Login;

