import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
	width: '100%',
	height: '400px'
};

const center = {
	lat: -5.878446,
	lng: -35.2121904
};

function Map() {
	return(
		<LoadScript googleMapsApiKey="">
			<GoogleMap 
				mapContainerStyle={containerStyle}
				center={center}
				zoom={10}
			>
			<Marker
		      position={center}
    		/>
			</GoogleMap>
		</LoadScript>
	);
}

export { Map };