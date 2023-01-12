import { useEffect, useState } from "react";
import HomeButton from "../../utils/HomeButton";

const Fermentations = () => {
    const [yeast, setYeast] = useState([])

    useEffect(() => {
        fetch("../api/dummyData")
        .then(res => res.json())
        .then(data => setYeast(data))
    }, [])

    return (
        <>
            {yeast.map(y => y.strain)}
            This is where fermentations are
            <HomeButton />
        </>
    )
};

export default Fermentations;