import React, { FC } from "react"
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom"

const Admin: FC = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Le Admin Page</h1>
      <button
        onClick={() => {
          auth.signOut()
          navigate("/Login")
        }}
      >
        SignOut
      </button>
    </div>
  )
}

export default Admin
