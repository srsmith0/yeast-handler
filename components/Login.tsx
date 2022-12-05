import {useState} from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleChange = (value, changeState) =>{
        changeState(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password)
        setUsername('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" value={username} onChange={((e) => handleChange(e.target.value, setUsername))} />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" value={password} onChange={(e) => handleChange(e.target.value, setPassword)} />
            <input type="submit" value="Login" />
        </form>
    )
};

export default Login;