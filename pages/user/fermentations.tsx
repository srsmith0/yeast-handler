import { useEffect, useState } from "react";

import HomeButton from "../../utils/HomeButton";

import styled from 'styled-components';
import { useRouter } from "next/router";

const Fermentations = () => {
    const [yeast, setYeast] = useState([])

    const router = useRouter();

    useEffect(() => {
        fetch("../api/dummyData")
        .then(res => res.json())
        .then(data => setYeast(data))
    }, [])

    return (
        <>
            {yeast.map(y => 
                <YeastButton onClick={() => router.push(
                    {
                        pathname: '/user/yeast-details',
                        query: y
                    },
                    '/user/yeast-details',
                )}>
                        {y.strain} <br />
                        {y.current_tank} <br />
                        Gen {y.gen}
                </YeastButton>)}
            <div><HomeButton /></div>
        </>
    )
};

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

export default Fermentations;