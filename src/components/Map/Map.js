import React from 'react'
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';

import "./Map.css";

const Map = ()=> {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_API
      })

const position ={
    lat:32.973060,
    lng: 35.378397
}
    return (
        <div className="map">
            {isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width:'100%',height:'100%'}}
        center={position}
        zoom={15}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
          <Marker position={position} options={{
              label:{
                  text:"Algermak 2000",
                  className:"map-marker"
              }
          }}/>
      </GoogleMap>
      
  )
   : (<></>)}
   <a href="https://www.google.com/maps/place/%D7%A6%D7%99%D7%9E%D7%A8+%D7%90%D7%9C+%D7%92'%D7%90%D7%A8%D7%9E%D7%A7+2000%E2%80%AD/@32.9730035,35.3787629,17z/data=!4m5!3m4!1s0x151c2ff226ca346f:0x74f06616a758572!8m2!3d32.965763!4d35.3812251?hl=en"target="_blank"><i  className="fas fass fa-map-marked-alt fa-2x">Navigation via google Map</i> </a>
    <a href="https://www.waze.com/en/live-map/directions/israel/north-district/bayt-jan/%D7%90%D7%99%D7%A8%D7%95%D7%97-%D7%93%D7%A8%D7%95%D7%96%D7%99-%D7%90%D7%9C%D7%92%D7%A8%D7%9E%D7%A7-2000?to=place.ChIJJxv1kJIvHBURCHvL7-4QGJ8" target="_blank"><i className="fab fa-waze fa-2x fass" >Navigation via Waze</i> </a>
        </div>

    )
}

export default Map ;

