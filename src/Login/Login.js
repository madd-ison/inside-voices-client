import React from 'react'

function Login() {
  {/*  const [currentUser, setCurrentUser] = useState({currentUser: ''})

    function handleLogin(event) {
        const {name, value} = event.target
        setCurrentUser(prevUser => ({...prevUser, [name]: value}))
    }

    function loginSubmit() {

    } */}
    return (
        <form>
            <label>
                Email
                <input 
                    type="text" 
                    name="username"
                    //onChange={handleLogin}
                    required 
                    />
            </label>
            <label>
                Password
                <input 
                    type="password" 
                    name="password"
                    //onChange={handleLogin}
                    required/>
            </label>
      </form>
    )
}

export default Login