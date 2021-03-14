
import React, { Component, useCallback } from 'react';
import app from "../../firebase";
import { Box, Text, Heading, FormField, TextInput, Grommet, Button } from "grommet";
import { Hide, View } from 'grommet-icons';
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function FAQ() {

    AOS.init();

    return (
        <Box
            background="#7D4CDB"
            style={{
                height: '100vh'
            }}
            align='center'
            gap="small"
        >
            <Box
                width='large'
                data-aos="fade-down-right"
            >
                <Heading
                    size="large"

                >FAQ</Heading>
            </Box>
            <Box
                width='large'
                data-aos="fade-up-left">
                <Heading
                    size="small"
                >What is Guardian Angel?</Heading>
                <Text>Guardian Angel is a group of volunteers dedicated to providing a safe space for women and men who need to discreetly leave a bad date. All you have to do is order an Angel Shot at an Angel Certified restaurant and an employee will take you to a safe area.</Text>
            </Box>
            <Box
                width='large'
                data-aos="fade-down-right">
                <Heading
                    size="small"
                >What is an Angel Shot?</Heading>
                <Text>Angel Shot is a secret codeword that you can order to let your server know that you need help.</Text>
            </Box>
            <Box
                width='large'
                data-aos="fade-up-left">
                <Heading
                    size="small"
                >What will a server do when they hear an Angel Shot being ordered?</Heading>
                <Text>The server will make up an excuse to take you aside alone to a safe room. Once you are safe, you have the option to call an Uber or have an employee walk you to your car.</Text>
            </Box>
            <Box
                width='large'
                data-aos="fade-down-right">
                <Heading
                    size="small"
                >I’m a restaurant owner and I want to help. How do I become Angel Certified?
                </Heading>
                <Text>You can apply using the Contact Us form. A volunteer will contact you on how to train your employees.</Text>
            </Box>



        </Box >
    );
}

export default FAQ;



