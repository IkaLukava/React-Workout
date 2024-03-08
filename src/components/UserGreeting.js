import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }

  render() {
    if(this.state.isLoggedIn){
        return(
        <div>
            Wlcome ikako
        </div>)
    }else{
        return(
        <div>
            Welcome guest
        </div>
        )
    }
    return (
    <div>
      <div> Welcome ikako</div>
      <div> Welcome maxo</div>
    </div>
    )
  }
}

export default UserGreeting