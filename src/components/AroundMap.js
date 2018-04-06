import React from 'react';
import {POS_KEY} from "../constants"
import {AroundMarker} from "./AroundMarker"
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
} from "react-google-maps";

class AroundMap extends React.Component{

    reloadMarkers = () => {
        const center = this.map.getCenter();
        const position = { lat: center.lat(), lon: center.lng() };
        this.props.loadNearbyPosts(position, this.getRange());
    }

    getRange = () => {
        const google = window.google;
        const center = this.map.getCenter();
        const bounds = this.map.getBounds();
        if (center && bounds) {
            const ne = bounds.getNorthEast();
            const right = new google.maps.LatLng(center.lat(), ne.lng());
            return 0.000621371192 * google.maps.geometry.spherical.computeDistanceBetween(center, right);
        }
    }


    getMapRef = (map) => {
        this.map = map;
    }

    render() {
        const pos = JSON.parse(localStorage.getItem(POS_KEY));
        return(
            <GoogleMap
                ref = {this.getMapRef}
                defaultZoom={11}
                defaultCenter={{ lat: pos.lat, lng: pos.lon}}
                onDragEnd = {this.reloadMarkers}
                onZoomChanged={this.reloadMarkers}
            >
                {  this.props.posts ?
                    this.props.posts.map((post) => {
                        return <AroundMarker post = {post}
                                             key = {post.url}/>
                    }) : null
                }
            </GoogleMap>
        );
    };
}

export const WrappedAroundMap = withScriptjs(withGoogleMap(AroundMap));