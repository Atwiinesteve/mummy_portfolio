// importing react.
import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

// importing styles.

function GoogleMaps() {
	return (
		<Map
			google={this.props.google}
			style={{ width: "100%", height: "100%" }}
			zoom={10}
			initialCenter={{
				lat: 0.04069,
				lng: 32.45856,
			}}
		/>
	);
}

// exporting Google Maps
export default GoogleApiWrapper({
    apiKey: ""
})(GoogleMaps);
