import HomeButton from "../utils/HomeButton";
import { useState } from "react";
import styled from 'styled-components';

import Input from '../utils/Input';

const AddBrew = ({ yeasts }) => {
    const [brand, setBrand] = useState('');
    const [yeast, setYeast] = useState('');
    const [fermenter, setFermenter] = useState('');
    const [batchSize, setBatchSize] = useState('');
    const [gravity, setGravity] = useState('');
    const [brewDate, setBrewDate] = useState('');
    
    // const brew = {
    //     brand,
    //     yeast,
    //     fermenter,
    //     batchSize,
    //     gravity
    // };

    const clearData = () => {
        setBrand('');
        setYeast({});
        setFermenter('');
        setBatchSize('');
        setGravity(''); 
        setBrewDate('');
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const brew = {
            brand,
            yeast,
            fermenter,
            batchSize,
            gravity
        };
        //TODO: post to database
        console.log(e.target)
        clearData();
    };

    const handleYeast = (e) => {
        let yeastIndex = e.target.value
        setYeast(yeasts[yeastIndex]);
    };

    const displayYeast = () => {
        return (
            <>
            <select required id="yeast" name="yeast" onChange={handleYeast}>
                <option value="select">Select yeast</option>
                {yeasts.map((yeast, index) =>
                    <option key={index} value={index}>{`${yeast.strain}, G${yeast.gen}, ${yeast.current_tank}`}</option>)}
            </select>
            </>
        )
    };

    return (
        <>
         <BrewForm id="brewForm" onSubmit={handleSubmit}>
                <BrewInput>
                    <Input required={true} value={brand} valueChange={setBrand} name="brand" title="Brand: " />
                </BrewInput>
                <BrewInput>
                        <label htmlFor="yeast">Choose Yeast Source:</label> {displayYeast()} <br />
                </BrewInput>
                <BrewInput>
                    <Input required={true} value={fermenter} valueChange={setFermenter} name="fermenter" title="Fermenter: " />
                </BrewInput>
                <BrewInput>
                    <Input required={true} value={batchSize} valueChange={setBatchSize} name="batchSize" title="Batch Size: " />
                </BrewInput>
               <BrewInput>
                    <Input required={true} value={gravity} valueChange={setGravity} name="gravity" title="Gravity: " />
                </BrewInput>
                  <BrewInput>
                    <Input required={true} value={brewDate} valueChange={setBrewDate} name="brewDate" title="Brew Date: " />
                </BrewInput>
                {/*<BrewInput>
                    <Input required={true} value={supplier} valueChange={setSupplier} name="supplier" title="Supplier: " />
                </BrewInput>
                <BrewInput>
                    <Input required={true} value={quantity} valueChange={setQuantity} name="quantity" title="Quantity: " />
                </BrewInput>
                <BrewInput>
                    <label htmlFor="propType">Choose Prop Type: </label>
                    <select id="propType" name="propType" onChange={changeProp}>
                        <option value="Direct" selected>Direct</option>
                        <option value="One Step">One Step</option>
                        <option value="Two Step">Two Step</option>
                    </select>
                </BrewInput>
                {propType==="One Step" ? 
                <BrewInput>
                    <Input required={true} value={propWort} valueChange={setPropWort} name="propWort" title="Prop Brand: " /> 
                    <Input required={true} value={propVolume} valueChange={setPropVolume} name="propVolume" title="Prop Volume: " />
                    <Input required={true} value={propPlato} valueChange={setPropPlato} name="propPlato" title="Prop Plato: " />
                </BrewInput> 
                : null}
                {propType==="Two Step" ?
                 <BrewInput>
                    <p>First Prop:</p>
                    <Input required={true} value={propWort} valueChange={setPropWort} name="propWort" title="Prop Brand: " /> 
                    <Input required={true} value={propVolume} valueChange={setPropVolume} name="propVolume" title="Prop Volume: " />
                    <Input required={true} value={propPlato} valueChange={setPropPlato} name="propPlato" title="Prop Plato: " />
                    <p>Second Prop:</p>
                    <Input required={true} value={propWortTwo} valueChange={setPropWortTwo} name="propWortTwo" title="Prop Brand: " /> 
                    <Input required={true} value={propVolumeTwo} valueChange={setPropVolumeTwo} name="propVolumeTwo" title="Prop Volume: " />
                    <Input required={true} value={propPlatoTwo} valueChange={setPropPlatoTwo} name="propPlatoTwo" title="Prop Plato: " />
                </BrewInput> 
                : null} */}

                <AddBrewButton type="submit"> Add </AddBrewButton>
            </BrewForm>

        <br />
        <HomeButton />
        </>
    )
};

export default AddBrew;

const BrewForm = styled.form`
    text-align: center;
    padding: 3rem;
`
const BrewInput = styled.div `
    margin: 1rem;
`

const AddBrewButton = styled.button `
    margin-top: 2rem;
`