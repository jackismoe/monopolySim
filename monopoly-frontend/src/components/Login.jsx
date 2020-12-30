import React from 'react'
class Login extends React.Component {

  render() {
    return(
      <>
        <form className='loginForm'>
          <label>UserName:</label><br/>
            <input type='text'/><br/>
          <label>Password:</label><br/>
            <input type='text'/><br/>
          <input type='submit'/>
        </form><br/>
        <p>No Account?</p><button>Signup Here</button><br/>
        <p>Don't want an account?</p><button>Start Game</button>
      </>
    ) 
  }
}

export default Login