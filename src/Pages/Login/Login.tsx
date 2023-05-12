import React, { ChangeEvent, FC, useState } from "react"
import "./Login.scss"
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"

const Login: FC = () => {
  const navigate = useNavigate()
  const [fields, setFields] = useState({
    email: "",
    password: "",
  })

  const loginFunction = async () => {
    await signInWithEmailAndPassword(auth, fields["email"], fields["password"])
      .then(() => {
        navigate("/Admin")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFields((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='loginContainer'>
      <h1>Prihlaste se</h1>
      <div className='inputField'>
        <input type='text' placeholder='Email' name='email' onChange={handleChange} />
      </div>
      <div className='inputField'>
        <input type='password' placeholder='Heslo' name='password' onChange={handleChange} />
      </div>
      <button onClick={loginFunction} className='loginButton'>
        Prihlasit se
      </button>
    </div>
  )
}

export default Login
