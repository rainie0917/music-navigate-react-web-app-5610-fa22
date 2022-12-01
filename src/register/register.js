import {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../services/users-thunks.js";
import {Navigate, userNavigate} from "react-router";

const Register = () => {
  const {currentUser} = useSelector((state) => state.users)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [adminInvitationCode, setAdminInvitationCode] = useState('')
  const [validatePassword, setValidatePassword] = useState('')
  const [error, setError] = useState(null)
  const dispatch = useDispatch()
  const admin = "ADMIN"
  const invitationCode = "musicappcs5610"
  const handleRegisterBtn = () => {
    if (username.length === 0 || password.length === 0 || validatePassword.length === 0) {
      setError('Required field cannot be empty')
      return
    }
    if (password.length < 6) {
      setError('Password needs to be equal or greater than 6 characters')
      return
    }
    if (password !== validatePassword) {
      setError('Passwords must match')
      return
    }
    if (role.length === 0) {
      setError("Please select a role")
      return
    }
    if (role === admin) {
      if (adminInvitationCode.length === 0) {
        setError("Admin invitation code cannot be empty")
        return
      }
      if (adminInvitationCode !== invitationCode) {
        setError("Your code is invalid")
        return
      }
    }
    const newUser = {username, password, role}
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
        {
            currentUser &&
            <div className="alert alert-success mb-2">
              You have been registered as {currentUser.username}
            </div>
        }
        <div className="d-flex justify-content-center text-primary mb-2">Sign up for free</div>
        <div className="ms-2 fs-6 fw-bold">Pick a username *</div>
        <input className="form-control mb-2"
               value={username}
               type="text"
               placeholder="Username"
               onChange={(e) => setUsername(e.target.value)}/>
        <div className="ms-2 fs-6 fw-bold">Enter your password *</div>
        <input
            className="form-control mb-2"
            value={password}
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}/>
        <div className="ms-2 fs-6 fw-bold">Confirm your password *</div>
        <input
            className="form-control mb-2"
            value={validatePassword}
            type="text"
            placeholder="Validate Password"
            onChange={(e) => setValidatePassword(e.target.value)}/>
        <div className="mb-2">
          <label className="ms-2 fs-6 fw-bold me-2">Choose a role *</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="FAN" selected>FAN</option>
            <option value="ARTIST">ARTIST</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>
        <div className="ms-2 fs-6 fw-bold text-muted">Optional: please enter your admin invitation code if you choose ADMIN as role</div>
        <input
            className="form-control mb-2"
            value={adminInvitationCode}
            type="text"
            placeholder="Admin Invitation Code"
            onChange={(e) => setAdminInvitationCode(e.target.value)}/>
        <button onClick={handleRegisterBtn}
                className="btn btn-primary w-100 mb-2">
          Register
        </button>
        <div className="d-flex justify-content-center text-primary mb-2">
          <label className="mt-1">Have an account?</label>
          <Link className="ms-1 mt-1" to="/login">Login</Link>
        </div>
        <div className="ms-2 fs-6 fw-bold text-danger">Fields with * are require field</div>
      </>
  )
}

export default Register