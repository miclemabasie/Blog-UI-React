import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
      <span className="login-title">Login</span>
      <form action="" className="login-form">
        <label>Email</label>
        <input className='login-input' type="email" placeholder='Enter your email'/>

        <label htmlFor="">Password</label>
        <input className='login-input' type="password" />


        <button className="login-button">Login</button>
        <button className="login-register-button"><Link className='linkbtn linkbtnlogin' to="/register">Register</Link></button>
      </form>
    </div>
  )
}

export default Login