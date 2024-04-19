import { useEffect, useState } from "react";
import Image from "next/image";

// CREATE MAP IMAGES
// https://learn.microsoft.com/en-us/bingmaps/rest-services/imagery/get-a-static-map

export default function Map() {
    const bingMapsApiKey = process.env.NEXT_PUBLIC_API_KEY;
    const format = "jpeg";
    const centerPoint = "49.24936795802063,-123.00199080213194";
    const imagerySet = "Road";
    const zoomLevel = "13";
    const url = `https://dev.virtualearth.net/REST/v1/Imagery/Map/${imagerySet}/${centerPoint}/${zoomLevel}?format=${format}&key=${bingMapsApiKey}`
    console.log(url);
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
        <div>
            <Image src={map} width={300} height={300}/>
        </div>
    );
};