import { Navigate } from 'react-router-dom'
const { getToken } = require('util')
function AuthRoute({ children }) {
    const token = getToken()
    if (token) {
        return <>{children}</>
    } else {
        return <Navigate to={'/login'}></Navigate>
    }
}
export default AuthRoute
