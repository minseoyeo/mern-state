import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {

  const {currentUser} = useSelector((state) => state.use)

  return (
    currentUser ? <Outlet/> : <Navigate to='/sign-in'><h1>Sign in to view this page</h1>
    </Navigate>
  )
}
