import {useState} from 'react';

import Input from '../utils/Input';

const Login = () => {
    const [username, setUsername] = useState<String>('');
    const [password, setPassword] = useState<String>('');

    const handleSubmit = (e) => {
        //TODO: add authentication to this
        e.preventDefault();
        console.log(username)
        setUsername('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input required={true} value={username} valueChange={setUsername} name="username" title="Username: " />
            <Input required={true} value={password} valueChange={setPassword} name="password" title="Password: " />
            <input type="submit" value="Login" />
        </form>
    )
};

export default Login;