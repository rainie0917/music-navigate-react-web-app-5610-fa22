import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../services/users-thunks.js";

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [neuId, setNeuId] = useState('')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            setError('Passwords must match')
            return
        }
        setError(null)
        const newUser = {username, password}
        dispatch(registerThunk(newUser))
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
            <input
                className="form-control mb-2"
                value={email}
                type="email" 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}/>
            <input
                className="form-control mb-2"
                value={firstName}
                type="text" 
                placeholder="Firstname"
                onChange={(e) => setFirstName(e.target.value)}/>
            <input
                className="form-control mb-2"
                value={lastName}
                type="text" 
                placeholder="Lastname"
                onChange={(e) => setlastName(e.target.value)}/>
            <input
                className="form-control mb-2"
                value={neuId}
                type="text"
                placeholder="NEU ID"
                onChange={(e) => setNeuId(e.target.value)}/>
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