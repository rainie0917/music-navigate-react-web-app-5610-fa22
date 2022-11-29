import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router";
import {registerThunk} from "../services/users-thunks.js";

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState('')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            setError('Passwords must match')
            return
        }
        setError('User already exist!')
        const newUser = {username, password}
        dispatch(registerThunk(newUser))
    }
    if(currentUser) {
        return (<Navigate to={'/profile'}/>)
    }
    return(
        <>
            <h1>Register</h1>
            {
                error &&
                <div className="alert alert-danger">
                    {error}
                </div>
            }
            <input
                className="form-control mb-2"
                value={username}
                type="text" 
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}/>
            <input
                className="form-control mb-2"
                value={password}
                type="text" 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}/>
            <input
                className="form-control mb-2"
                value={validatePassword}
                type="text" 
                placeholder="Validate Password"
                onChange={(e) => setValidatePassword(e.target.value)}/>
            <button
                onClick={handleRegisterBtn}
                className="btn btn-primary w-100">
                Register
            </button>
            {
                currentUser &&
                <h2>Welcome {currentUser.username}</h2>
            }
        </>
    )
}

export default Register