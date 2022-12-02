import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const AddressMap = () => {
  const theme = useTheme();
  const mobileS = useMediaQuery(theme.breakpoints.between("320", "375"));
  const mobileM = useMediaQuery(theme.breakpoints.between("375", "425"));
  const mobileL = useMediaQuery(theme.breakpoints.between("425", "768"));
  const matchesSM = useMediaQuery(theme.breakpoints.only("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.only("md"));

  const defaultWidth = "500";
  const width = matchesMD
    ? "400"
    : matchesSM
    ? "300"
    : mobileL
    ? "380"
    : mobileM
    ? "320"
    : mobileS
    ? "280"
    : defaultWidth;

  const API_KEY = "AIzaSyDq4V7lU-EBoTtCIytlUXPzINPfQKNFUM0";
  const area = "&q=Diamond%20Square%2C%20Jalan%20Semarak%20API%202";
  const src = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}${area}`;
  const title = "Google map for the company";

  return (
    <iframe
      title={title}
      src={src}
      width={width}
      height={"200"}
      frameBorder="0"
      style={{ border: 0, boxShadow: "0px 3px 6px #00000029" }}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
    ></iframe>
  );
};
export default AddressMap;
// import * as React from "react";
// import { Wrapper } from "@googlemaps/react-wrapper";
// import { createCustomEqual } from "fast-equals";
// import { isLatLngLiteral } from "@googlemaps/typescript-guards";

// const google = window.google;

// const render = (status) => {
//   return <h1>{status}</h1>;
// };

// const Marker = (options) => {
//   const [marker, setMarker] = React.useState();

//   React.useEffect(() => {
//     if (!marker) {
//       setMarker(new google.maps.Marker());
//     }

//     // remove marker from map on unmount
//     return () => {
//       if (marker) {
//         marker.setMap(null);
//       }
//     };
//   }, [marker]);

//   React.useEffect(() => {
//     if (marker) {
//       marker.setOptions(options);
//     }
//   }, [marker, options]);

//   return null;
// };

// export default function Map() {
//   const [clicks, setClicks] = React.useState([]);
//   const [zoom, setZoom] = React.useState(18);
//   const [center, setCenter] = React.useState({
//     lat: 3.195845474653551,
//     lng: 101.70590284350398,
//   });

//   const onClick = (e) => {
//     // avoid directly mutating state
//     // setClicks([...clicks, e.latLng]);
//   };

//   const onIdle = (m) => {
//     setZoom(m.getZoom());
//     setCenter(m.getCenter().toJSON());
//   };

//   return (
//     <Wrapper apiKey={"AIzaSyDq4V7lU-EBoTtCIytlUXPzINPfQKNFUM0"} render={render}>
//       <MapComponent
//         center={center}
//         onClick={onClick}
//         onIdle={onIdle}
//         zoom={zoom}
//         style={{ flexGrow: "1", height: "100%" }}
//       >
//         {clicks.map((latLng, i) => (
//           <Marker key={i} position={latLng} />
//         ))}
//       </MapComponent>
//     </Wrapper>
//   );
// }

// const MapComponent = ({ onClick, onIdle, children, style, ...options }) => {
//   const ref = React.useRef(null);
//   const [map, setMap] = React.useState();

//   React.useEffect(() => {
//     if (ref.current && !map) {
//       setMap(new window.google.maps.Map(ref.current, {}));
//     }
//   }, [ref, map]);

//   // because React does not do deep comparisons, a custom hook is used
//   // see discussion in https://github.com/googlemaps/js-samples/issues/946
//   useDeepCompareEffectForMaps(() => {
//     if (map) {
//       map.setOptions(options);
//     }
//   }, [map, options]);

//   React.useEffect(() => {
//     if (map) {
//       if (onClick) {
//         map.addListener("click", onClick);
//       }

//       if (onIdle) {
//         map.addListener("idle", () => onIdle(map));
//       }
//     }
//   }, [map, onClick, onIdle]);

//   return (
//     <>
//       <div ref={ref} style={style} />
//       {React.Children.map(children, (child) => {
//         if (React.isValidElement(child)) {
//           // set the map prop on the child component
//           // @ts-ignore
//           return React.cloneElement(child, { map });
//         }
//       })}
//     </>
//   );
// };

// const deepCompareEqualsForMaps = createCustomEqual((deepEqual) => (a, b) => {
//   if (
//     isLatLngLiteral(a) ||
//     a instanceof google.maps.LatLng ||
//     isLatLngLiteral(b) ||
//     b instanceof google.maps.LatLng
//   ) {
//     return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
//   }

//   // TODO extend to other types

//   // use fast-equals for other objects
//   return deepEqual(a, b);
// });

// function useDeepCompareMemoize(value) {
//   const ref = React.useRef();

//   if (!deepCompareEqualsForMaps(value, ref.current)) {
//     ref.current = value;
//   }

//   return ref.current;
// }

// function useDeepCompareEffectForMaps(callback, dependencies) {
//   React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
// }
