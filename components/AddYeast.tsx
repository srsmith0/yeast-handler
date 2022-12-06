import {useState} from 'react';

import Input from '../utils/Input';

const AddYeast = () => {
    const [strain, setStrain] = useState('');
    const [gen, setGen] = useState('');
    const [received, setReceived] = useState('');
    const [countAtPitch, setCountAtPitch] = useState('');
    const [source, setSource] = useState('');
    const [supplier, setSupplier] = useState('');
    const [quantity, setQuantity] = useState('');
    const [propType, setPropType] = useState('');

    return (
        <>
            <Input value={strain} valueChange={setStrain} name="strain" title="Strain Name: " />
            <Input value={gen} valueChange={setGen} name="gen" title="Generation: " />
            <Input value={received} valueChange={setReceived} name="received" title="Received On: " />
            <Input value={countAtPitch} valueChange={setCountAtPitch} name="countAtPitch" title="Pitch Count: " />
            <Input value={source} valueChange={setSource} name="source" title="Source: " />
            <Input value={supplier} valueChange={setSupplier} name="supplier" title="Supplier: " />
            <Input value={quantity} valueChange={setQuantity} name="quantity" title="Quantity: " />
            <Input value={propType} valueChange={setPropType} name="propType" title="Prop Type: " />

        </>
    )
};

export default AddYeast;
   // const Input = ({value, valueChange, name, title})