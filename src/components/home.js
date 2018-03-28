import React from 'react';
import { Tabs, Button, Spin } from 'antd';
import $ from 'jquery';
import {GEO_OPTIONS, POS_KEY, API_ROOT, AUTH_PREFIX, TOKEN_KEY} from "../constants";

const TabPane = Tabs.TabPane;
const operations = <Button type="primary">Extra Action</Button>;

export class Home extends React.Component{
    state = {
        loadingGeoLocation: false,
        error: '',
    }
    componentDidMount() {
        this.setState({loadingGeoLocation: true, error: ''});
        this.getGeoLocation();
    }

    getGeoLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                this.onSuccessLoadGeoLocation,
                this.onFailLoadGeoLocation,
                GEO_OPTIONS,
            );
        } else {
            this.setState({error: "Your browser does not support geolocation!"});
        }
    }

    onSuccessLoadGeoLocation = (position) => {
        this.setState({loadingGeoLocation: false, error: ''});
        const {latitude, longitude} = position.coords;
        localStorage.setItem(POS_KEY, JSON.stringify({lat: latitude, lon: longitude}));
        this.loadNearbyPosts();
    }

    onFailLoadGeoLocation = () => {
        this.setState({loadingGeoLocation: false, error: "Failed to load geo location"});
    }

    getGalleryPanelContent = () => {
        if (this.state.error) {
            return (<div>{this.state.error}</div>);
        } else if (this.state.loadingGeoLocation) {
            return (<Spin tip="Loading Geo Location..."/>)
        } else {
            return null;
        }
    }

    loadNearbyPosts = () => {
        const {lat, lon} = JSON.parse(localStorage.getItem(POS_KEY));
        $.ajax({
            url: `${API_ROOT}/search?lat=${lat}&lon=${lon}&range=20`,
            method: "GET",
            headers: {
                Authorization: `${AUTH_PREFIX} ${localStorage.getItem(TOKEN_KEY)}`
            }
        }).then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            }
        ).catch((error) => {
                console.log(error);
            }
        );
    }

    render() {
        return(
            <Tabs tabBarExtraContent={operations} className="main-tabs">
                <TabPane tab="Posts" key="1">
                    {this.getGalleryPanelContent()}
                </TabPane>
                <TabPane tab="Map" key="2">Content of tab 2</TabPane>
            </Tabs>
        );
    }
}