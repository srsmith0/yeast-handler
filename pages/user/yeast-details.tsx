//TODO: add yeast id dynamically to address. Use params to search database for yeast ID/useEffect so data stays on page on refresh

import { useRouter } from "next/router";
import HomeButton from "../../utils/HomeButton";

const YeastDetails = () => {
    const router = useRouter();
    const yeastData = router.query;

    return (
        <>
        <p>Strain: {yeastData.strain}</p>
        <p>Brand: {yeastData.brand}</p>
        <p>Volume: {yeastData.size}</p>
        <p>Count at Pitch: {yeastData.count_at_pitch}</p>
        <p>Source: {yeastData.source}</p>
        <p>Source Brand: {yeastData.source_brand}</p>
        <p>Current Tank: {yeastData.current_tank}</p>
        <p>Gen: {yeastData.gen}</p>
        <p>Date Received: {yeastData.received}</p>
        <p>Vendor: {yeastData.purchased_from}</p>
        <p>Quantity Purchased: {yeastData.quantity}</p>
        <p>Prop Type: {yeastData.prop_type}</p>
        <HomeButton />
        </>
    )
};

export default YeastDetails;