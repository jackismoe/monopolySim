import React from 'react'

class Signup extends React.Component {
  render() {
    return(
      <>
        <form className='loginForm'>
          <label>UserName:</label><br/>
            <input type='text'/><br/>
          <label>Password:</label><br/>
            <input type='text'/><br/>
          <label>Confirm Password:</label><br/>
            <input type='text'/><br/>
          <input type='submit'/>
        </form>
      </>
    ) 
  }
}

export default Signup