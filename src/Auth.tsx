import React, { useEffect, useState, FC, PropsWithChildren } from "react"
import { auth } from "./firebase"
import { onAuthStateChanged } from "firebase/auth"
import { useNavigate } from "react-router-dom"

// export interface IAuthRouteProps {}

const AuthRoute: FC<PropsWithChildren> = (props) => {
  const { children } = props
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    AuthCheck()
  }, [auth])

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false)
    } else {
      console.log("unathorized")
      navigate("/Login")
    }
  })

  if (loading) return <p>Loading...</p>

  return <>{children}</>
}

export default AuthRoute
