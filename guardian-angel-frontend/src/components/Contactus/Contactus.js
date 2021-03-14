import React, { Component, useCallback } from 'react';
import app from "../../firebase";
import { Box, Text, Heading, FormField, TextInput, Grommet, Button } from "grommet";
import { Hide, View } from 'grommet-icons';
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contactus() {

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
                        >Leave us a message
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
                                        placeholder="type here"

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
                    />
                </div>
            </Box>
        </Box >
    );
}

export default Contactus;

