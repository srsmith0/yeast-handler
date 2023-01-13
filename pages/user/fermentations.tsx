import { useEffect, useState } from "react";

import HomeButton from "../../utils/HomeButton";

import styled from 'styled-components';
import { useRouter } from "next/router";

const Fermentations = () => {
    const [allYeast, setAllYeast] = useState([]);

    const router = useRouter();

    useEffect(() => {
        fetch("../api/dummyData")
        .then(res => res.json())
        .then(data => setAllYeast(data))
    }, []);


    return (
        <>
            {allYeast.map(y =>
                <YeastButton key={y.id} onClick={() => router.push(`/user/yeast-details/${y.id}`)}>
                        {y.strain} <br />
                        {y.current_tank} <br />
                        Gen {y.gen}
                </YeastButton>
            )}

            <div><HomeButton /></div>
        </>
    )
};

export default Fermentations;


const YeastButton = styled.button`
    color: black;
    font-weight: bold;
    height: 6rem;
    width: 6rem;
    border-radius: 40px;
    background-color: #ccc797;
    &:hover {
        cursor: pointer;
        background-color: #8d885f;
    }
`