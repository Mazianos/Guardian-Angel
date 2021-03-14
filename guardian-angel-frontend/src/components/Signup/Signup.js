import React, { Component } from 'react';
import { Box, Text, Heading, FormField, TextInput, Grommet, Button } from "grommet";
import { Hide, View } from 'grommet-icons';

function Login() {
    const [text, setText] = React.useState('');
    const [value, setValue] = React.useState('');
    const [reveal, setReveal] = React.useState(true);

    function logSignup() {
        console.log("Testing!");
    }

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
                    >Sign up
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
                    label="Create account"
                    secondary
                    disabled={!text.includes("@")}
                    onClick={() => logSignup()} />
            </Box>
        </Box >
    );
}

export default Login;

