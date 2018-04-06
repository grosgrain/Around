import React from 'react';
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} = require("react-google-maps");

class AroundMap extends React.Component{
    state = {
        isOpen: false,
    }

    onToggleOpen = () => {
        this.setState((prev) => ({isOpen: !prev.isOpen}));
    }

    render() {
        return(
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                <Marker
                    position={{ lat: -34.397, lng: 150.644 }}
                    onClick={this.onToggleOpen}
                >
                    {this.state.isOpen && <InfoWindow onCloseClick={this.onToggleOpen}>
                        <div></div>
                    </InfoWindow>}
                </Marker>
            </GoogleMap>
        );
    };
}

export const WrappedAroundMap = withScriptjs(withGoogleMap(AroundMap));