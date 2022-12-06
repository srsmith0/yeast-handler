
const Input = ({value, valueChange, name, title}) => {

    return (
        <>
            <label htmlFor={name}>{title}</label>
            <input 
                type={name != "password" ? "text" : "password"} 
                name={name} 
                value={value} 
                onChange={((e) => valueChange(e.target.value))} 
            />
        </>
    )
};

export default Input;