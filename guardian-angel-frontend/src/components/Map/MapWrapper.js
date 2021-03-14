import React, { Component } from 'react';
import { Box, Button, Grommet, Text, TextInput, Image } from "grommet";
import Map from './Map'
import { List } from 'grommet-icons';


class MapWrapper extends Component {


    render() {
        return (
            <Box >
                <Box
                    border
                    background="#481EA8"
                    style={{ position: 'absolute', zIndex: 1 }}
                    size="medium"
                    margin={{ top: 'medium', left: 'medium' }}
                    round
                    align='center'
                    gap='small'
                    pad={{ bottom: 'medium' }}
                >
                    <Box direction='row' gap="small">
                        <Grommet theme={{ textInput: { extend: () => `font-size: 20px;`, } }}>
                            <Box
                                margin={{ top: 'small', left: 'small' }}
                            >
                                <TextInput
                                    style={{ borderRadius: "12px" }}
                                    placeholder="type here"
                                />
                            </Box>
                        </Grommet>
                        <Button
                            icon={<List size="large"></List>}
                        ></Button>
                    </Box>


                    <Box
                        direction='row'
                        background='white'
                        round
                        align='start'
                        pad="small"
                        gap="medium"
                        style={{ overflow: 'hidden', width: '20vw' }}

                    >
                        <Box gap='xsmall'>
                            <Text weight='bold'>Resturant name</Text>
                            <Text weight='normal' size="small">Angel Shot ✔️</Text>
                            <Text weight='normal' size="small">Hours: 9:00am-5:00pm</Text>
                            <Text weight='normal' size="small">⭐⭐⭐</Text>
                        </Box>
                        <Image
                            src="https://images.otstatic.com/prod/26601330/3/medium.jpg"
                            fit
                            style={{ borderRadius: '20px' }}
                        ></Image>
                    </Box>

                    <Box
                        direction='row'
                        background='white'
                        round
                        align='start'
                        pad="small"
                        gap="medium"
                        style={{ overflow: 'hidden', width: '20vw' }}
                    >
                        <Box gap='xsmall'>
                            <Text weight='bold'>Resturant name</Text>
                            <Text weight='normal' size="small">Angel Shot ✔️</Text>
                            <Text weight='normal' size="small">Hours: 9:00am-5:00pm</Text>
                            <Text weight='normal' size="small">⭐⭐⭐</Text>
                        </Box>
                        <Image
                            src="https://images.otstatic.com/prod/26601330/3/medium.jpg"
                            fit
                            style={{ borderRadius: '20px' }}
                        ></Image>
                    </Box>
                </Box>
                <Map />
            </Box >
        );
    }
}

export default MapWrapper;