import HomeButton from "../utils/HomeButton";
import { useState } from "react";
import styled from 'styled-components';

import Input from '../utils/Input';

const AddBrew = () => {
    const [brand, setBrand] = useState('');
    const [fermenter, setFermenter] = useState('');
    const [batchSize, setBatchSize] = useState('');
    const [gravity, setGravity] = useState('');
    const [brewDate, setBrewDate] = useState('');
    
    const brew = {
        brand,
        fermenter,
        batchSize,
        gravity
    };

    const clearData = () => {
        setBrand('');
        setFermenter('');
        setBatchSize('');
        setGravity(''); 
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        //TODO: post to database
        console.log(brew)
        clearData();
    };

    return (
        <>
         <BrewForm id="brewForm" onSubmit={handleSubmit}>
                <BrewInput>
                    <Input required={true} value={brand} valueChange={setBrand} name="brand" title="Brand: " />
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
const BrewInput = styled.span `
    margin: 1rem;
`

const AddBrewButton = styled.button `
    margin-top: 2rem;
`