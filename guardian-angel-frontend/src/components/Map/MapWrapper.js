import React, { Component } from 'react';
import { Box, Button, Grommet, Text, TextInput, Image } from "grommet";
import Map from './Map'
import { List } from 'grommet-icons';


class MapWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 0,
            height: 0,
            showListings: false
        }
        window.addEventListener("resize", this.update());
        window.addEventListener("load", this.update());
    }
    componentDidMount() {
        this.update();
    }
    update = () => {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        });

    };

    setShowListings = () => {
        this.setState({
            showListings: !this.state.showListings
        })
    }

    render() {
        return (
            <Box >

                {
                    this.state.width && this.state.width > 550 ?
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
                                    src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                    fit='cover'

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
                                margin={{ top: 'small' }}
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
                                    src="https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    fit='cover'

                                    style={{ borderRadius: '20px' }}
                                    alignSelf='center'
                                ></Image>
                            </Box>
                        </Box>
                        :

                        <Box direction='row' fill >
                            <Box
                                background="#481EA8"
                                style={{
                                    position: 'absolute',
                                    zIndex: 1,
                                    display: this.state.showListings ? 'block' : 'none'
                                }}
                                pad='10%'
                                gap="medium"
                            >

                                <Box gap='xsmall' >
                                    <Text weight='bold' >Earls Kitchen + Bar</Text>
                                    <Text weight='normal' size="small">Angel Shot ✔️</Text>
                                    <Text weight='normal' size="small" >Location: 2850 Shaughnessy St #5100</Text>
                                    <Text weight='normal' size="small" >Port Coquitlam,BC V3C 6K5</Text>
                                    <Text weight='normal' size="small">Hours: 9:00am-5:00pm</Text>
                                    <Text weight='normal' size="small">⭐⭐⭐</Text>
                                </Box>
                                <Image
                                    src="https://www.lasallecollege.com/-/media/images/responsive/collegelasalle_montreal/laclasserestaurant/1920x1080-6.ashx"

                                    style={{ height: '225px', width: '300px' }}
                                    align='center'
                                ></Image>
                                <Box gap='xsmall'>
                                    <Text weight='bold'>Cactus Club</Text>
                                    <Text weight='normal' size="small">Angel Shot ✔️</Text>
                                    <Text weight='normal' size="small" >Location:  101 Schoolhouse St #110</Text>
                                    <Text weight='normal' size="small" >Coquitlam, BC V3K 4X8</Text>
                                    <Text weight='normal' size="small">Hours: 9:00am-5:00pm</Text>
                                    <Text weight='normal' size="small">⭐⭐⭐⭐</Text>
                                </Box>
                                <Box
                                    pad={{ bottom: 'xlarge' }}

                                >

                                    <Image
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW0a7VVdLak2IphSKPp1_ewXElo9DFY-UwZA&usqp=CAU"

                                        style={{ height: '225px', width: '300px' }}
                                        align='center'
                                    ></Image>
                                </Box>
                            </Box>
                            <Button
                                label="map"
                                style={{ position: 'fixed', zIndex: 1, bottom: "20px", left: "42%" }}
                                primary
                                onClick={() => { this.setShowListings() }}>
                            </Button>
                        </Box>
                }
                <Map width={this.state.width} />
            </Box >
        );
    }
}

export default MapWrapper;