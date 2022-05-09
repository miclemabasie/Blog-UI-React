import './Register.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='register'>
        <span className="register-title">Register</span>
      <form action="" className="register-form">
        <label htmlFor="">Username</label>
            <input className='register-input' type="text" placeholder='Enter your username'/>

        <label>Email</label>
        <input className='register-input' type="email" placeholder='Enter your email'/>

        <label htmlFor="">Password</label>
        <input className='register-input' type="password" />

        <label htmlFor="">Confirm Password</label>
        <input className='register-input' type="password" />

        <button className="register-button">Register</button>
        <button className="login-register-button"><Link className='linkbtn' to="/login">Login</Link></button>

      </form>
    </div>
  )
}

export default Register