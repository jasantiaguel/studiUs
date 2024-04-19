import { useEffect, useState } from "react";
import Image from "next/image";

// CREATE MAP IMAGES
// https://learn.microsoft.com/en-us/bingmaps/rest-services/imagery/get-a-static-map

export default function Map({centerPoint="49.249234265894394,-123.00899574963694", circlePoint="49.24936795802063,-123.00199080213194", circleDiameter="108", width="366", height="176"}) {
    const bingMapsApiKey = process.env.NEXT_PUBLIC_API_KEY;
    const format = "jpeg";
    const imagerySet = "Road";
    const zoomLevel = "13";
    const mapSize = `${width},${height}`;
    const url = `https://dev.virtualearth.net/REST/v1/Imagery/Map/${imagerySet}/${centerPoint}/${zoomLevel}?drawCurve=c,4000A3FF,4000A3FF,4,${circleDiameter/2};${circlePoint}&mapSize=${mapSize}&format=${format}&key=${bingMapsApiKey}`
    const [map, setMap] = useState();
    useEffect(() => {
        fetch(url)
        .then((res) => res.blob())
        .then((info) => {
            const imgURL = URL.createObjectURL(info);
            setMap(imgURL);
        })
    }, [])
    return (
        <Image src={map} width={width} height={height} style={{borderRadius: "16px"}}/>
    );
};