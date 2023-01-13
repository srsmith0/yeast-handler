//TODO: add yeast id dynamically to address. Use params to search database for yeast ID/useEffect so data stays on page on refresh

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import HomeButton from "../../../utils/HomeButton";

const YeastDetails = () => {
    const [ allYeast, setAllYeast ] = useState([])
    const [ yeast, setYeast ] = useState(null)

    const router = useRouter();
    const yeastID = parseInt(router.query.id);

    useEffect(() => {
        getYeasts();
        findYeast();
        console.log(yeast)
    }, [] );

    const getYeasts = () => {
        fetch("../../api/dummyData")
        .then(res => res.json())
        .then(data => setAllYeast(data));
    };

    const findYeast = () => {
        console.log(yeastID)
        let myYeast = allYeast.find(y => y.id === yeastID)
        setYeast(myYeast)
    }
    if(yeast === null){
        return 'Loading..'
    }
    return (
        <>
        {/* <p>Strain: {yeast.strain}</p>
        <p>Brand: {yeast.brand}</p>
        <p>Volume: {yeast.size}</p>
        <p>Count at Pitch: {yeast.count_at_pitch}</p>
        <p>Source: {yeast.source}</p>
        <p>Source Brand: {yeast.source_brand}</p>
        <p>Current Tank: {yeast.current_tank}</p>
        <p>Gen: {yeast.gen}</p>
        <p>Date Received: {yeast.received}</p>
        <p>Vendor: {yeast.purchased_from}</p>
        <p>Quantity Purchased: {yeast.quantity}</p>
        <p>Prop Type: {yeast.prop_type}</p> */}
        <HomeButton />
        </>
    )
};

export default YeastDetails;