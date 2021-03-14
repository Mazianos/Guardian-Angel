import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Box, Text } from "grommet";

// const Marker = ({ text }) => <div>{text}</div>;
const Marker = () =>
    <img style={{
        position: "absolute",
        transform: "translate(-50%, -100%)"
    }}
        src='../../../primary-marker.png'></img>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 49.24966,
            lng: -123.11934
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <Box style={{ height: this.props.width && this.props.width > 450 ? '95vh' : '94vh', width: '100%' }}>

                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GoogleMaps }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Marker
                        lat={49.233311}
                        lng={-122.852249}
                    />
                    <Marker
                        lat={49.257250}
                        lng={-122.782680}
                    />
                </GoogleMapReact>
            </Box>
        );
    }
}

export default Map;