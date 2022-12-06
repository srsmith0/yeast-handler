import {useState} from 'react';

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