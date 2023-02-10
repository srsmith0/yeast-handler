import {useState} from 'react';
import styled from 'styled-components';

import Input from '../utils/Input';

const AddYeast = () => {
    const [strain, setStrain] = useState<String>('');
    const [gen, setGen] = useState<Number>(0);
    const [received, setReceived] = useState<String>('');
    const [countAtPitch, setCountAtPitch] = useState<String>('');
    const [source, setSource] = useState<String>('');
    const [supplier, setSupplier] = useState<String>('');
    const [quantity, setQuantity] = useState<String>('');
    const [propType, setPropType] = useState<String>('Direct');
    const [propWort, setPropWort] = useState<String>('');
    const [propVolume, setPropVolume] = useState<String>('');
    const [propPlato, setPropPlato] = useState<String>('');
    const [propWortTwo, setPropWortTwo] = useState<String>('');
    const [propVolumeTwo, setPropVolumeTwo] = useState<String>('');
    const [propPlatoTwo, setPropPlatoTwo] = useState<String>('');

    const propInfo = {
        propType,
        propWort,
        propVolume,
        propPlato,
        propWortTwo,
        propVolumeTwo,
        propPlatoTwo,
    }

    let yeast = {
        strain,
        gen,
        received,
        countAtPitch,
        source,
        supplier,
        quantity,
        propInfo
    };

    const clearData = () => {
        setStrain('')
        setGen(0)
        setReceived('')
        setCountAtPitch('')
        setSource('')
        setSupplier('')
        setQuantity('')
        setPropType('')
        setPropWort('')
        setPropVolume('')
        setPropPlato('')
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        //TODO: add yeast object to database, POST request
        // fetch('http://localhost:3000/api/yeast', {
        //     method: "POST",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     }, 
        //     body: JSON.stringify(yeast)
        // }).then(response => console.log(response))
        
        //TODO: add form reset for react instead of each state
        console.log(yeast)
        clearData();
    };

    const changeProp = (e) => {
        e.preventDefault();
        setPropType(e.target.value);
    };

    return (
        <>
            <YeastForm id="yeastForm" onSubmit={handleSubmit}>
                <YeastInput>
                    <Input required={true} value={strain} valueChange={setStrain} name="strain" title="Strain Name: " />
                </YeastInput>
                <YeastInput>
                    <Input required={true} value={gen} valueChange={setGen} name="gen" title="Generation: " />
                </YeastInput>
                <YeastInput>
                    <Input required={true} value={received} valueChange={setReceived} name="received" title="Received On: " />
                </YeastInput>
                <YeastInput>
                    <Input required={true} value={countAtPitch} valueChange={setCountAtPitch} name="countAtPitch" title="Pitch Count: " />
                </YeastInput>
                <YeastInput>
                    <Input required={true} value={source} valueChange={setSource} name="source" title="Source: " />
                </YeastInput>
                <YeastInput>
                    <Input required={true} value={supplier} valueChange={setSupplier} name="supplier" title="Supplier: " />
                </YeastInput>
                <YeastInput>
                    <Input required={true} value={quantity} valueChange={setQuantity} name="quantity" title="Quantity: " />
                </YeastInput>
                <YeastInput>
                    <label htmlFor="propType">Choose Prop Type: </label>
                    <select id="propType" name="propType" onChange={changeProp}>
                        <option value="Direct" selected>Direct</option>
                        <option value="One Step">One Step</option>
                        <option value="Two Step">Two Step</option>
                    </select>
                </YeastInput>
                {propType==="One Step" ? 
                <YeastInput>
                    <Input required={true} value={propWort} valueChange={setPropWort} name="propWort" title="Prop Brand: " /> 
                    <Input required={true} value={propVolume} valueChange={setPropVolume} name="propVolume" title="Prop Volume: " />
                    <Input required={true} value={propPlato} valueChange={setPropPlato} name="propPlato" title="Prop Plato: " />
                </YeastInput> 
                : null}
                {propType==="Two Step" ?
                 <YeastInput>
                    <p>First Prop:</p>
                    <Input required={true} value={propWort} valueChange={setPropWort} name="propWort" title="Prop Brand: " /> 
                    <Input required={true} value={propVolume} valueChange={setPropVolume} name="propVolume" title="Prop Volume: " />
                    <Input required={true} value={propPlato} valueChange={setPropPlato} name="propPlato" title="Prop Plato: " />
                    <p>Second Prop:</p>
                    <Input required={true} value={propWortTwo} valueChange={setPropWortTwo} name="propWortTwo" title="Prop Brand: " /> 
                    <Input required={true} value={propVolumeTwo} valueChange={setPropVolumeTwo} name="propVolumeTwo" title="Prop Volume: " />
                    <Input required={true} value={propPlatoTwo} valueChange={setPropPlatoTwo} name="propPlatoTwo" title="Prop Plato: " />
                </YeastInput> 
                : null}

                <AddYeastButton type="submit"> Add </AddYeastButton>
            </YeastForm>

        </>
    )
};

export default AddYeast;

const YeastForm = styled.form `
    text-align: center;
    padding: 3rem;

`
const YeastInput = styled.span `
    margin: 1rem;
`
const AddYeastButton = styled.button `
    margin-top: 2rem;
`