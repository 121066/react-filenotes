import { Navigate } from 'react-router-dom'
const { getToken } = require('../util')
console.log(getToken(), '?????')
function AuthRoute({ children }) {
    const token = getToken()
    if (token) {
        return <>{children}</>
    } else {
        return <Navigate to={'/login'}></Navigate>
    }
}
export default AuthRoute
