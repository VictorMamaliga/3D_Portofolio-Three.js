import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1200
      }}
      style={{width:"100%",height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#8cf8dd"
        stroke="#da4ea2"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[0, 51.5566]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#da4ea2",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#da4ea2">
          {"London"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
