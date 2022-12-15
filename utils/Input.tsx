const Input = ({value, valueChange, name, title, required}) => {
  

    return (
        <>
            <label htmlFor={name}>{title}</label>
            <input
                required={required ? true : false} 
                type={name === "password" ? "password" : "text"} 
                name={name} 
                value={value} 
                onChange={((e) => valueChange(e.target.value))} 
            />
        </>
    )
};

export default Input;