import GoogleMapReact from 'google-map-react'

const Map = ({center, zoom}) => {
    return (
        <div className="map">
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_CLOUD_API }}
            defaultCenter={center}
            defaultZoom={zoom}
          
            ></GoogleMapReact>
            
        </div>
    )
}

export default Map
