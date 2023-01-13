import { GetServerSideProps, NextPageContext } from "next";
import { useEffect, useState } from "react";

import HomeButton from "../../../utils/HomeButton";

export const getServerSideProps: GetServerSideProps = async (context: NextPageContext) => { {
    const { query } = context;
    return { props: { query } };
}}

const YeastDetails = ({ query }) => {
    const [ allYeast, setAllYeast ] = useState([])
    const [ yeast, setYeast ] = useState(null)

    const yeastID = parseInt(query.id)

    useEffect(() => {
        getYeasts();
        setYeast(allYeast.find(y => y.id === yeastID))
        //won't update yeast even though allyeast is a full array
        console.log(yeast)
    }, [] );

    const getYeasts = () => {
        fetch("../../api/dummyData")
        .then(res => res.json())
        .then(data => setAllYeast(data));
    };

    if(yeast === null || undefined){
        return 'Loading..'
    }
    return (
        <>
        <p>Strain: {yeast.strain}</p>
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
        <p>Prop Type: {yeast.prop_type}</p>
        <HomeButton />
        </>
    )
};

export default YeastDetails;