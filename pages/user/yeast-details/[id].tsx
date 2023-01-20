import { GetServerSideProps } from "next";

import HomeButton from "../../../utils/HomeButton";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context
    const res = await fetch("http://localhost:3000/api/dummyData")
    const yeasts = await res.json()

  return {
    props: {
      query, yeasts
    },
  };
};

const YeastDetails = ({ query, yeasts }) => {   
    const yeastID = parseInt(query.id)
    const yeast = yeasts.find(y => y.id === yeastID);

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