import { selectCurrentUser, selectIsAuthenticated, UserRole } from '@react-nx26-nov/auth-data-access'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

interface ProtectedRouteProps {
  redirectTo: string,
  allowedRoles: UserRole[]
}
const protectedRoutes = ({
  redirectTo = '/auth/login',
  allowedRoles
}:ProtectedRouteProps ) => {

  const location = useLocation()
  const user = useSelector(selectCurrentUser)
  const isAuthenticated = useSelector(selectIsAuthenticated)
  // const isInitialized = useSelector(selectIs)

  if(!user || !isAuthenticated){
    return <Navigate to={redirectTo} state={{from: location}} replace />
  }

   if (allowedRoles && allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }
    
  return (
    <Outlet/>
  )
}

export default protectedRoutes