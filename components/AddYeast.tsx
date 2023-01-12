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
    const [propType, setPropType] = useState<String>('');

    let yeast = {
        strain,
        gen,
        received,
        countAtPitch,
        source,
        supplier,
        quantity,
        propType
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        //TODO: add yeast object to database, POST request
        //TODO: add form reset for react instead of each state
        console.log(yeast)
        setStrain('')
        setGen(0)
        setReceived('')
        setCountAtPitch('')
        setSource('')
        setSupplier('')
        setQuantity('')
        setPropType('')
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
                    <Input required={true} value={propType} valueChange={setPropType} name="propType" title="Prop Type: " />
                </YeastInput>
                <AddYeastButton type="submit" value="Add" />
            </YeastForm>

        </>
    )
};

export default AddYeast;
   // const Input = ({value, valueChange, name, title})
const YeastForm = styled.form `
    text-align: center;

`
const YeastInput = styled.span `
    padding: 3rem;

`

const AddYeastButton = styled.input `
    margin-top: 2rem;
`