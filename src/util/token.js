import Cookie from 'js-cookie'
function getToken() {
    return Cookie.get('dbyxsToken')
}
function setToken(value) {
    Cookie.set('dbyxsToken', value)
}
function removeToken() {
    Cookie.remove('dbyxsToken')
}
export { getToken, setToken, removeToken }
