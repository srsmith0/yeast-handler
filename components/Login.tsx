import {useState} from 'react';
import Input from '../utils/Input';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleChange = (value, changeState) =>{
        changeState(value);
    };

   // const Input = ({value, valueChange, name, title})
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username)
        setUsername('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input value={username} valueChange={setUsername} name="username" title="Username: " />
            <Input value={password} valueChange={setPassword} name="password" title="Password: " />
            {/* <label htmlFor="username">Username: </label>
            <input type="text" name="username" value={username} onChange={((e) => handleChange(e.target.value, setUsername))} />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" value={password} onChange={(e) => handleChange(e.target.value, setPassword)} />
             */}
            <input type="submit" value="Login" />
        </form>
    )
};

export default Login;