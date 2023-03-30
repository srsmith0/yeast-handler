import { useEffect, useState } from "react";

import HomeButton from "../../utils/HomeButton";

import styled from 'styled-components';
import DisplayYeast from "../../components/DisplayYeast";
import AddBrew from "../../components/AddBrew";

const Fermentations = () => {
    const [allYeast, setAllYeast] = useState([]);
    const [specificYeast, setSpecificYeast] = useState(null);

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

    const findYeast = async (ID) => {
        const res = await fetch('http://localhost:3000/api/dummyData')
        const yeasts = await res.json()
        setSpecificYeast(yeasts.find(y => y.id === ID))
    };

    const hideInfo = () => {
        setSpecificYeast(null)
    };

    return (
        <PageDiv>
        <YeastContainer>
            {sortedYeast.map(y =>
                <YeastButton key={y.id} onClick={() => findYeast(y.id)}>
                        {y.brand} <br />
                        {y.strain} <br />
                        Gen {y.gen} <br />
                        {y.current_tank} <br />
                </YeastButton>
            )}
        </YeastContainer>
        <YeastInfoContainer>
            {!specificYeast ? 
                null 
                :
                <DisplayYeast yeast={specificYeast} hideInfo={hideInfo} />
                
            }
        </YeastInfoContainer>
            <div><HomeButton /></div>
            <div><AddBrew yeasts={allYeast}/></div>
        </PageDiv>
    )
};

export default Fermentations;


const PageDiv = styled.div`
    display: flex;
`

const YeastButton = styled.button`
    color: black;
    font-weight: bold;
    height: 6rem;
    width: 6rem;
    margin: 0.5rem;
    border-radius: 40px;
    background-color: #ccc797;
    &:hover {
        cursor: pointer;
        background-color: #8d885f;
    }
`

const YeastContainer = styled.div`
    margin: 1rem;
    width: 75%;
`

const YeastInfoContainer = styled.span`
    width: 50%;
    
`