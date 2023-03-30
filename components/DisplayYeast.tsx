
const DisplayYeast = ({ yeast, hideInfo }) => {

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
        <button onClick={() => hideInfo()}>Close</button>
        </>
    )

};

export default DisplayYeast;