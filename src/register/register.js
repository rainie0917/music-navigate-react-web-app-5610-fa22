import {useState} from "react";
import {Link} from "react-router-dom";
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
        setError(null)
        const newUser = {username, password}
        dispatch(registerThunk(newUser))
    }
    if(currentUser) {
        return (<Navigate to={'/profile'}/>)
    }
    return(
        <>
            <h2 className="d-flex justify-content-center text-primary fw-bold mt-3 mb-2">Register</h2>
            {
                error &&
                <div className="alert alert-danger mb-2">
                    {error}
                </div>
            }
            <div className="d-flex justify-content-center text-primary mb-2">Sign up for free</div>
            <div className="ms-2 fs-6 fw-bold">Pick a username</div>
            <input
                className="form-control mb-2"
                value={username}
                type="text" 
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}/>
            <div className="ms-2 fs-6 fw-bold">Enter your password</div>
            <input
                className="form-control mb-2"
                value={password}
                type="text" 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}/>
            <div className="ms-2 fs-6 fw-bold">Confirm your password</div>
            <input
                className="form-control mb-2"
                value={validatePassword}
                type="text" 
                placeholder="Validate Password"
                onChange={(e) => setValidatePassword(e.target.value)}/>
            <button
                onClick={handleRegisterBtn}
                className="btn btn-primary w-100 mb-2">
                Register
            </button>
            <div className="d-flex justify-content-center text-primary mb-2">
                <label className="mt-1">Have an account?</label>
                <Link className="ms-1 mt-1" to="/login">Login</Link>
            </div>
            {
                currentUser &&
                <h2>Welcome {currentUser.username}</h2>
            }
        </>
    )
}

export default Register