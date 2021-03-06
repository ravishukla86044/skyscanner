import React from "react";
import { withGoogleMap, GoogleMap, withScriptjs, Marker, InfoWindow } from "react-google-maps";
import { compose, withProps, withStateHandlers } from "recompose";

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDw8fLbdKL_8UfSiTZ0ETf5vsfay58wEvQ&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: "100%", width: "100%" }} />,
    mapElement: <div style={{ height: "100%" }} />,
  }),
  withStateHandlers(
    (props) => ({
      infoWindows: props.places.map((p) => {
        return { isOpen: false };
      }),
    }),
    {
      onToggleOpen:
        ({ infoWindows }) =>
        (selectedIndex) => ({
          infoWindows: infoWindows.map((iw, i) => {
            iw.isOpen = selectedIndex === i;
            return iw;
          }),
        }),
    }
  ),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={props.zoom} defaultCenter={props.center}>
    {props.places &&
      props.places.map((place, i) => {
        let lat = parseFloat(place.latitude, 10);
        let lng = parseFloat(place.longitude, 10);

        return (
          <Marker
            id={place.id}
            key={place.id}
            position={{ lat: lat, lng: lng }}
            title="Click to zoom"
            onClick={props.onToggleOpen.bind(this, i)}
          >
            {props.infoWindows[i].isOpen && (
              <InfoWindow onCloseClick={props.onToggleOpen.bind(i)}>
                <div>{place.name}</div>
              </InfoWindow>
            )}
          </Marker>
        );
      })}
  </GoogleMap>
));

export { Map };
