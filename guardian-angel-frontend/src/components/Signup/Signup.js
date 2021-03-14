import React, { Component } from 'react';
import { Box, Text, Heading, FormField, TextInput, Grommet, Button } from "grommet";
import PasswordTextBox from './PasswordTextBox'

function Login() {
    const [text, setText] = React.useState('');

    function logSignup() {
        console.log("Testing!");
    }

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
                            <PasswordTextBox emailFilled={text.length}></PasswordTextBox>
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

