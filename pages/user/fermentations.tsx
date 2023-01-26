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

    const sortYeast = (a, b) => {
        const tankA = a.current_tank;
		const tankB = b.current_tank;

		let comparison = 0;
		if (tankA > tankB) {
			comparison = 1;
		} else if (tankA < tankB) {
			comparison = -1;
		}
		return comparison;
    };

    const sortedYeast = allYeast.sort(sortYeast);

    return (
        <>
            {sortedYeast.map(y =>
                <YeastButton key={y.id} onClick={() => router.push(`/user/yeast-details/${y.id}`)}>
                        {y.brand} <br />
                        {y.strain} <br />
                        Gen {y.gen} <br />
                        {y.current_tank} <br />
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