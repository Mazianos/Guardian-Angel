import React, { Component } from 'react';
import { Box, Button, Grommet, Text, TextInput, Image } from "grommet";
import Map from './Map'
import { List } from 'grommet-icons';


class MapWrapper extends Component {


    render() {
        return (
            <Box >
                <Box
                    background="#481EA8"
                    style={{ position: 'absolute', zIndex: 1 }}
                    margin={{ top: 'medium', left: 'medium' }}
                    round
                    align='center'
                    gap='small'
                    pad='small'
                >
                    <Box direction='row' gap="small"
                    >
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
                            <Text weight='bold'>Earls Kitchen + Bar</Text>
                            <Text weight='normal' size="small">Angel Shot ✔️</Text>
                            <Text weight='normal' size="small" >Location: 2850 Shaughnessy St #5100</Text>
                            <Text weight='normal' size="small" >Port Coquitlam,BC V3C 6K5</Text>
                            <Text weight='normal' size="small">Hours: 9:00am-5:00pm</Text>
                            <Text weight='normal' size="small">⭐⭐⭐</Text>
                        </Box>
                        <Image
                            src="https://images.otstatic.com/prod/26601330/3/medium.jpg"
                            fit
                            style={{ borderRadius: '20px' }}
                            alignSelf='center'
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
                            <Text weight='bold'>Cactus Club</Text>
                            <Text weight='normal' size="small">Angel Shot ✔️</Text>
                            <Text weight='normal' size="small" >Location:  101 Schoolhouse St #110</Text>
                            <Text weight='normal' size="small" >Coquitlam, BC V3K 4X8</Text>
                            <Text weight='normal' size="small">Hours: 9:00am-5:00pm</Text>
                            <Text weight='normal' size="small">⭐⭐⭐⭐</Text>
                        </Box>
                        <Image
                            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            fit
                            style={{ borderRadius: '20px' }}
                            alignSelf='center'
                        ></Image>
                    </Box>
                </Box>
                <Map />
            </Box >
        );
    }
}

export default MapWrapper;