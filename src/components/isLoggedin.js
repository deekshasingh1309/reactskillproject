const isLoggedin = () => {
    const user = !!JSON.parse(localStorage.getItem('myData'))
    return user;
}

export default isLoggedin;